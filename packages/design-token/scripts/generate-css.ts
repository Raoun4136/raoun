import * as fs from 'fs';
import * as path from 'path';
import * as globalTokens from '../src/tokens/global';
import * as semanticTokens from '../src/tokens/semantic';
import * as colorSet from '../src/tokens/color-set';
import { transformObject } from '../src/utils/util';

/**
 * 평탄화된 객체를 순회하며 CSS 변수를 생성합니다.
 * transformObject를 사용하여 객체를 평탄화한 후, 각 키-값 쌍을 CSS 변수로 변환합니다.
 *
 * @param flattenedObj - transformObject로 평탄화된 객체
 * @param category - CSS 변수 카테고리 (예: 'global-colors', 'semantic-color')
 * @returns CSS 변수 문자열 배열
 */
const generateCSSVariables = (flattenedObj: Record<string, string>, category: string): string[] => {
	return Object.entries(flattenedObj).map(([key, value]) => {
		// transformObject가 생성한 키를 경로 배열로 변환 (예: 'primary-10' -> ['primary', '10'])
		// 키는 이미 평탄화되어 있으므로 그대로 사용
		const varName = `--${category}-${key}`;
		return `  ${varName}: ${value};`;
	});
};

/**
 * CSS 파일 내용을 생성합니다.
 * global 토큰과 semantic 토큰을 모두 포함하여 :root 선택자 안에 CSS 변수로 변환합니다.
 *
 * @param primary - color-set에서 가져온 primary 색상 객체
 * @returns 생성된 CSS 문자열
 */
const generateCSS = (primary: Record<string, string>) => {
	const cssLines: string[] = [];
	cssLines.push(':root {');
	cssLines.push('');

	// Global Colors: color-set의 primary 색상과 global colors를 결합
	const globalColors = { primary, ...globalTokens.colors };
	const flattenedGlobalColors = transformObject(globalColors);
	cssLines.push(...generateCSSVariables(flattenedGlobalColors, 'global-colors'));

	cssLines.push('');

	// Global Elevation: 그림자 효과 토큰
	const flattenedElevation = transformObject(globalTokens.elevation);
	cssLines.push(...generateCSSVariables(flattenedElevation, 'global-elevation'));

	cssLines.push('');

	// Global Radius: 모서리 둥글기 토큰
	const flattenedRadius = transformObject(globalTokens.radius);
	cssLines.push(...generateCSSVariables(flattenedRadius, 'global-radius'));

	cssLines.push('');

	// Global Spacing: 간격 토큰
	const flattenedSpacing = transformObject(globalTokens.spacing);
	cssLines.push(...generateCSSVariables(flattenedSpacing, 'global-spacing'));

	cssLines.push('');

	// Global Typography: 폰트, 폰트 크기, 폰트 굵기, 줄 간격 토큰
	const flattenedTypography = transformObject({
		font: globalTokens.typography.font,
		fontSize: globalTokens.typography.fontSize,
		fontWeight: globalTokens.typography.fontWeight,
		lineHeight: globalTokens.typography.lineHeight,
	});
	cssLines.push(...generateCSSVariables(flattenedTypography, 'global-typography'));

	cssLines.push('');

	// Semantic Colors: 의미론적 색상 토큰 (background, border, text, support 등)
	const flattenedSemanticColors = transformObject(semanticTokens.color);
	cssLines.push(...generateCSSVariables(flattenedSemanticColors, 'semantic-color'));

	cssLines.push('');

	// Semantic Typography: 의미론적 타이포그래피 토큰 (heading, body, caption)
	const flattenedSemanticTypography = transformObject({
		heading: semanticTokens.typography.heading,
		body: semanticTokens.typography.body,
		caption: semanticTokens.typography.caption,
	});
	cssLines.push(...generateCSSVariables(flattenedSemanticTypography, 'semantic-typography'));

	cssLines.push('');
	cssLines.push('}');

	return cssLines.join('\n');
};

/**
 * color-set 모듈에서 사용 가능한 모든 primary 색상 세트를 찾습니다.
 * 'firstPrimary', 'secondPrimary' 같은 이름 패턴을 찾아서 반환합니다.
 *
 * @returns color-set 이름과 primary 색상 객체의 맵
 */
const getAvailableColorSets = (): Map<string, Record<string, string>> => {
	const colorSets = new Map<string, Record<string, string>>();

	// color-set 모듈에서 export된 모든 속성을 확인
	for (const [key, value] of Object.entries(colorSet)) {
		// 'Primary'로 끝나는 export만 찾기 (예: 'firstPrimary', 'secondPrimary')
		if (key.endsWith('Primary') && typeof value === 'object' && value !== null) {
			// 'firstPrimary' -> 'first', 'secondPrimary' -> 'second'로 변환
			const setName = key.replace('Primary', '');
			colorSets.set(setName, value as Record<string, string>);
		}
	}

	return colorSets;
};

/**
 * 메인 실행 함수
 * color-set에서 사용 가능한 모든 primary 색상 세트를 찾아서
 * 각각에 대해 CSS 파일을 생성합니다.
 */
const main = () => {
	const distDir = path.join(__dirname, '../dist');
	const styleDir = path.join(distDir, 'style');

	// dist/style 디렉토리가 없으면 생성
	if (!fs.existsSync(styleDir)) {
		fs.mkdirSync(styleDir, { recursive: true });
	}

	// color-set에서 사용 가능한 모든 primary 색상 세트 가져오기
	const colorSets = getAvailableColorSets();

	// 각 color-set에 대해 CSS 파일 생성
	for (const [setName, primary] of colorSets) {
		const cssContent = generateCSS(primary);
		const cssFilePath = path.join(styleDir, `${setName}.css`);
		fs.writeFileSync(cssFilePath, cssContent, 'utf-8');
		console.log(`✅ ${setName} CSS 파일 생성 완료: ${cssFilePath}`);
	}

	console.log(`\n총 ${colorSets.size}개의 CSS 파일이 생성되었습니다.`);
};

main();
