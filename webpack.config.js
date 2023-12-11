// webpack.config.js

const path = require('path');

module.exports = {
  mode: 'production', // 또는 'development'
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // 파일 확장자들
  },
  module: {
    rules: [
      {
        test: /\.css$/, // CSS 파일을 찾기 위한 정규식
        use: ['style-loader', 'css-loader'], // CSS 파일을 번들하기 위한 로더 설정
      },
      {
        test: /\.(js|jsx|ts|tsx)$/, // JavaScript, TypeScript 파일을 위한 로더
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Babel을 통해 JS/TS 파일 번들링
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
    ],
  },
};
