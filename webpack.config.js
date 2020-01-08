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
    filename: 'main.js'
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
    // contentBase: './public', // 指定用户可访问的磁盘上的文件目录 把指定的根目录作为目录,类似于静态资源托管。
    // 默认访问public目录下的index.html
    hot: true, // 开启热更新
    port: 3000, //指定端口号
    open: true,
    compress: true // 开启zip压缩服务
  },
  devtool: 'inline-source-map',
  plugins: [
    // 这个插件会在内存中默认生成一个全新html文件，通过制定template模板制定生成想要的html文件
    new HtmlWebpackPlugin({
      // ,现在用户打开浏览器默认访问的就是这个html文件,而且自动的引入了打包好的js文件
      title: '这是html插件',
      // filename: 'myindex.html', // 使用npm run build 生成名字为index.html的文件浏览器会默认打开
      // template: './public/index.html'  模板html文件 这里都是在内存中生成的html文件
      filename: 'index.html',
      template: './public/index.html'
    }),
    new VueLoaderPlugin()
  ]
}
