const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
 server: {
  port: 3001, // default: 3000
  // host: '0.0.0.0', //必须这样部署，否则koa服务在阿里云上无法访问
},
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/reset.css',
    // 'element-ui/lib/theme-chalk/index.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src:'@/plugins/mint-ui', //element-ui@2.8与nuxt兼容性有问题
      ssr: true
    },
    {
      src:"@/plugins/http",
      ssr:true
    }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    // transpile: [/^element-ui/],
    extractCSS: { allChunks: true },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
