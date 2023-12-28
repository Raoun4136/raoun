const config = require('../../jest.config.js');

module.exports = {
  ...config,
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy', // css, scss 파일을 빈 객체로 변환
  },
};
