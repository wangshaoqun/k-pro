module.exports = {
  publicPath: './',
  productionSourceMap: process.env.NODE_ENV !== 'production',
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      }
    }
  },
  devServer: {
    open: true,
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://192.168.1.222:8085',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/api': '/api', // 重写,
        },
      },
    },
  },
}
