const path = require('path')
// 引入html插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
// VueLoader插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// 使用配置 指定入口和出口;
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jgp|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|ttf|svg|eot)$/,
        use: ['file-loader']
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  }, // watch: true // 也可以在配置文件中配置，开启监视模式。开发中不用，因为缺点是不能自动刷新浏览器
  devServer: {
    // 配置文件中配置dev-server
    // contentBase: './public', // 以上配置告知 webpack-dev-server，在 localhost:8080 下建立服务，将 public/index.html文件，作为可访问文件。
    // 默认访问public目录下的index.html 使用HtmlWebpackPlugin插件后把index.html文件也放进了内存 所以这个需要了 这个可以作为学习使用
    hot: true, // 开启热更新
    port: 3000, //指定端口号
    open: true,
    compress: true // 开启zip压缩服务
  },
  devtool: 'inline-source-map',
  plugins: [
    // 这个插件默认生成一个全新html文件(在内存中存在 或者执行npm run build  就是打包之后的index.html文件)，public/index/html文件是一个会被html-webpack-plugin 处理的模板(Vue-cli内容)
    // https://www.webpackjs.com/guides/output-management/#%E8%AE%BE%E5%AE%9A-htmlwebpackplugin webpack该插件详细解释
    new HtmlWebpackPlugin({
      // 现在用户打开浏览器默认访问的就是这个html文件,而且自动的引入了打包好的js文件
      title: '这是html插件',
      filename: 'index.html',
      template: './public/index.html'
    }),
    new VueLoaderPlugin()
  ]
}
