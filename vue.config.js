module.exports = {
  publicPath: '/ct3/',
  chainWebpack: (config) => {
    config.plugins.delete('prefetch')
  },
  transpileDependencies: [
    // can be string or regex
    '@cityofphiladelphia/mapboard',
    '@cityofphiladelphia/phila-vue-comps',
    '@cityofphiladelphia/phila-vue-mapping',
  ]
}
