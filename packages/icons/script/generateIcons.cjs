const fs = require('fs-extra');
const glob = require('glob');
const { default: svgr } = require('@svgr/core');
const { pascalCase } = require('change-case');
const path = require('path');

const componentTemplate = ({ template }, opts, { componentName, jsx }) => {
  const code = `
    import * as React from 'react';
    import type { SVGProps } from 'react';
    import { Ref, forwardRef } from 'react';
    NEWLINE
    export const COMPONENT_NAME = ({
      size = 16,
      fill,
      ...props
    }: SVGProps<SVGSVGElement> & {
      size?: '16px' | '20px' | '24px' | '32px' | number,
      fill?: string,
    },
    ref: Ref<SVGSVGElement>
  ) => COMPONENT_JSX
  `;

  const reactTemplate = template.smart(code, {
    plugins: ['react', 'typescript'],
  });

  return reactTemplate({
    COMPONENT_NAME: componentName,
    COMPONENT_JSX: jsx,
    NEWLINE: '\n',
  });
};

const svgrConfig = {
  plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
  replaceAttrValues: { '#000': 'currentColor' },
  svgProps: {
    focusable: 'false',
    shapeRendering: 'geometricPrecision',
    viewBox: '0 0 16 16',
    fill: 'currentColor',
    width: '{ size }',
    height: '{ size }',
  },
  svgoConfig: {
    multipass: true,
  },
  template: componentTemplate,
  jsx: {
    babelConfig: {
      plugins: [
        [
          '@svgr/babel-plugin-remove-jsx-attribute',
          {
            elements: ['path'],
            attributes: ['className', 'strokeWidth'],
          },
        ],
      ],
    },
  },
};

const baseDir = path.join(__dirname, '..');
const iconComponentsDir = path.join(baseDir, 'lib/icons');

(async () => {
  // Clean old files
  const svgComponentPaths = glob.sync('*/*.tsx', {
    cwd: iconComponentsDir,
    absolute: true,
  });
  const svgIndexPaths = glob.sync('*/*.ts', {
    cwd: iconComponentsDir,
    absolute: true,
  });
  console.log('Cleaning old icons...');

  for (const svgComponentPath of svgComponentPaths) {
    await fs.remove(svgComponentPath);
  }
  for (const svgIndexPath of svgIndexPaths) {
    await fs.remove(svgIndexPath);
  }

  // Get SVGs to generate
  const svgFilePaths = glob.sync('icons/*/*.svg', {
    cwd: baseDir,
    absolute: true,
  });

  console.log('Generating icons...');
  // const iconComponentsDirList = fs.readdirSync(iconComponentsDir);
  for (const svgFilePath of svgFilePaths) {
    const rawSvg = await fs.readFile(svgFilePath, 'utf8');
    const svg = rawSvg.replace(/ data-name=".*?"/g, '');
    const svgName = `Icon${pascalCase(path.basename(svgFilePath, '.svg'))}`;

    const svgFolder = svgFilePath.split('/icons/')[1].split('/')[0];
    const iconComponentsSetDir = path.join(iconComponentsDir, svgFolder);

    // Create icon directory if it's missing
    await fs.mkdirp(iconComponentsDir);
    await fs.mkdirp(iconComponentsSetDir);

    // Write SVG React component
    const componentName = `${svgName}`;
    const svgComponentCode = svgr
      .sync(svg, svgrConfig, {
        componentName,
      })
      .replace(/fill\="[a-zA-Z\d#]+"/g, 'fill={fill ?? "currentColor"}');

    await fs.writeFile(
      path.join(iconComponentsSetDir, `${componentName}.tsx`),
      svgComponentCode,
      { encoding: 'utf-8' }
    );

    const iconsSetIndexPath = path.join(iconComponentsSetDir, 'index.ts');

    const iconExport = `export { ${componentName} } from './${componentName}'`;
    let currentIndexContent = '';
    if (fs.existsSync(iconsSetIndexPath))
      currentIndexContent = await fs.readFile(iconsSetIndexPath, 'utf-8');

    const indexFileContent = `${currentIndexContent}\n${iconExport}`;

    await fs.writeFile(iconsSetIndexPath, indexFileContent, 'utf-8');
  }

  const iconComponentNames = (await fs.readdir(iconComponentsDir)).filter(
    (dir) => !dir.includes('index')
  );

  const iconExports = iconComponentNames
    .map((componentFile) => path.basename(componentFile, '.tsx'))
    .map((component) => `export * as ${component} from './${component}'`)
    .join('\n')
    .concat('\n');
  const iconsIndexPath = path.join(iconComponentsDir, 'index.ts');
  console.log('Generating icon index...');
  await fs.writeFile(iconsIndexPath, iconExports, 'utf-8');

  console.log('Done.');
})();
