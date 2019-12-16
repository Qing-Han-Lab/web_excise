// const WriteFilePlugin = require('write-file-webpack-plugin')
module.exports = {
  // 基本路径
  publicPath: './',
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // 插件
  // configureWebpack: {
  //   plugins: [new WriteFilePlugin()]
  // },
  devServer: {
    // hot: true,
    host: '0.0.0.0'
  },
  chainWebpack: (config) => {
    const imagesRule = config.module.rule('images')
    imagesRule
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 1024 }))
  }
}
