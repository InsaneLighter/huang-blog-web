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
  lintOnSave: false,
  transpileDependencies: [],
  productionSourceMap: false
}
