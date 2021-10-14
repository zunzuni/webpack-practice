//export

const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  //읽어 들이는 파일 > js 파일로 한다
  entry: './js/main.js', 
  //결과물(번들)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, 'dist'),  //dist같은 거 여기선 nodejs 에서 필요한 절대경로
    // filename: "main.js",
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

    // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins: [
      new HtmlPlugin({
        template: './index.html'
      }),
      new CopyPlugin({
        patterns: [
          { from: 'static' }
        ]
      })
    ],
    devServer: {
      host: 'localhost'
    }
}
//resolve 첫,두번째 인수를 합쳐준다
