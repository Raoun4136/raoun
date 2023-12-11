module.exports = {
  preset: 'ts-jest', //typeScript파일은 ts-jest에서 CommonJS구문으로 변환
  testEnvironment: 'node', //테스트 환경
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy', // css, scss 파일을 빈 객체로 변환
  },
};
