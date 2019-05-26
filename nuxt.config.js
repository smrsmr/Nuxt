import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
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
    'element-ui/lib/theme-chalk/index.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
	router: {
		middleware: ['userAuth']
	},
  plugins: [
    // '@/plugins/element-ui'
		{
	  	src: '~/plugins/element-ui',
	  	ssr: true  //开启服务端渲染
		},
		{
			src: '~/plugins/axios',
			// ssr: true  //开启服务端渲染
		},
		{
			src: '~/plugins/route',
			ssr: true  //开启服务端渲染
		}
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
	],
	 /*
  ** Axios module configuration
  */
	axios: {
    proxy: true
  },
  proxy: {
    '/api': 'http://127.0.0.1:3001'
  },
  /*
  ** Build configuration
	* 配置在自动生成的 vendor.bundle.js 文件中添加一些模块
  */
  build: {
    transpile: [/^element-ui/],
		vendor: [
			'~/plugins/element-ui',
		],
		babel: {
      'plugins': [
        [
          'component',
          {
            'libraryName': 'element-ui',
            'styleLibraryName': 'theme-chalk'
          }
        ]
      ],
      'comments': true
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
