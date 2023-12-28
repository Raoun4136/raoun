module.exports = {
  preset: 'ts-jest', //typeScript파일은 ts-jest에서 CommonJS구문으로 변환
  testEnvironment: 'node', //테스트 환경
  transform: {
    '\\.css\\.ts$': '@vanilla-extract/jest-transform',
  },
};
