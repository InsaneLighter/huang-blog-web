const webpack = require('webpack')
const path = require('path')
const port = 17778

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  runtimeCompiler: true,
  publicPath: process.env.PUBLIC_PATH,
  devServer: {
    host: 'localhost',
    //端口号
    port: port,
    //自动启动浏览器
    open: true
  },
  configureWebpack: config => {
    // 生产环境相关配置
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery'
      })
    )
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto'
    })
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('css', resolve('src/assets/css'))
      .set('img', resolve('src/assets/image'))
      .set('js', resolve('src/assets/js'))
  },
  lintOnSave: false,
  transpileDependencies: [],
  productionSourceMap: false
}
