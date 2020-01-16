# nuxt-koa-project

## Build Setup

# 安装依赖
	$ yarn install

# 运行开发模式
	$ yarn run dev

# 以生产模式启动一个Web服务器
	$ yarn run build
	$ yarn start
# PM2 启动服务
  $ yarn run pm2

# 编译应用，并依据路由配置生成对应的HTML文件 (用于静态站点的部署)。
	$ yarn run generate

## Other
如果只部署服务器端（非静态），只需要保留如下结构即可:

	  ├─.nuxt
	  ├─server        
	  ├─nuxt.config.js   
	  ├─package.json    

## 反向代理

- 通过[@nuxtjs/axios]模块(https://axios.nuxtjs.org/)进行请求，同时支持服务端与客户端
- nuxt.config.js 配置来分别对服务端与客户端进行配置：

      axios: {
          proxy: true,
          baseURL: 'http://service.inswindows.com',
          browserBaseURL:"/",
          credentials: false,
        },
        proxy: {
          '/api': {
            target: 'http://service.inswindows.com',
            changeOrigin: true,
            // pathRewrite: { '^/api': '' },
          },
        }

