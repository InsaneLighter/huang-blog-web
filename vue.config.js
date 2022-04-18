const webpack = require('webpack')
const path = require('path')
const port = 17778

nfunction resolve (dir) {
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
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:17007/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': 'api'
        }
      }
    }
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
    //网站初始化标题设置
    config.plugin('html').tap((args) => {
      args[0].title = 'Huang'
      return args
    })
  },
  lintOnSave: false,
  transpileDependencies: [],
  productionSourceMap: false
}
