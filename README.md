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

### Other
如果只部署服务器端（非静态），只需要保留如下结构即可:

	  ├─.nuxt
	  ├─server        
	  ├─nuxt.config.js   
	  ├─package.json     
