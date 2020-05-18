module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'content': 'components/content',
        'common': 'components/common',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // Provide path to the file with resources
          // resources: './path/to/resources.scss',
          // scss 目录
          resources: ['./src/assets/scss/mixin.scss', './src/assets/scss/setting.scss']
        })
        .end()
    })
  },
  // devServer: {
  //   open: true,
  //   host: 'localhost',
  //   port: 8080,
  //   https: false,
  //   //以上的ip和端口是我们本机的;下面为需要跨域的
  //   proxy: { //配置跨域
  //     '/api': {
  //       target: 'http://localhost:5001/api/', //这里后台的地址模拟的;应该填写你们真实的后台接口
  //       ws: true,
  //       changOrigin: true, //允许跨域
  //       pathRewrite: {
  //         '^/api': '' //请求的时候使用这个api就可以
  //       }
  //     }

  //   }
  // }
}
