const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
// 创建一个插件的实例对象
const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname,'./src/index.html'),
  filename: 'index.html'
})

// webpack默认只能打包处理 .js后缀名类型的文件，像 .png .vue 无法主动处理，所以要配置第三方的loader
module.exports = {
  mode: 'development',
  plugins: [
    htmlPlugin,
  ],
  module: {  //所有第三方文 模块的配置规则
    rules: [  //第三方匹配规则
      {test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/},//千万不要忘记添加exclude排除项
      // 大家可以在css-loader之后，通过?追加参数
      // 其中，有个固定的参数，叫做modules,表示为css样式表，启用模块化
      {test: /\.css$/, use: ['style-loader','css-loader?modules&localIdentName=[path][name]-[local]-[hash:6]']}//打包处理css样式表的第三方loader
    ]
  },
  resolve: {
    extensions: ['.js','.jsx','.json'], //表示这几个文件的后缀名，可以省略不写
    alias: {  //表示别名
      "@": path.join(__dirname,'./src') //这样就表示项目根目录中src的这一层路径
    }
  }
  
}