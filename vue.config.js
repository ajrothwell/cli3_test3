module.exports = {
  publicPath: '/ct3/',
  chainWebpack: (config) => {
    config.plugins.delete('prefetch')
  }
}
