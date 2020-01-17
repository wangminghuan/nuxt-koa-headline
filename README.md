## 基于Next.js的头条SSR应用

## 项目创建

    create-nuxt-app nuxt-koa-headline

脚手架在运行过程中会进行一系列选择最终生成一个完整的配置，基本是一键生成~

## 项目运行

### 安装依赖
	$ yarn install

### 运行开发模式
	$ yarn run dev

### 以生产模式启动一个Web服务器
	$ yarn run build
	$ yarn start
###  PM2 启动服务
  $ yarn run pm2

###  编译应用，并依据路由配置生成对应的HTML文件 (用于静态站点的部署)。
	$ yarn run generate

## 其他说明

如果只部署服务器端（非静态），只需要保留如下结构即可:

	  ├─.nuxt
	  ├─server        
	  ├─nuxt.config.js   
	  ├─package.json    

## 关于请求

通过[@nuxtjs/axios](https://axios.nuxtjs.org/)模块进行请求，同时支持服务端与客户端。 

nuxt.config.js 配置来分别对服务端与客户端进行配置：

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

Next.js 内部新增了一个异步方法：`asyncData`来加载数据，具体参见[文档](https://zh.nuxtjs.org/guide/async-data)

## 路由跳转

页面内通过`this.$router`对象来完成

## 关于SSR的特点

SSR框架中并不是所有请求都是服务端获取，服务端获取的场景一般两种情况：
- 第一种，系统初始化进入
- 第二种，任意页面的刷新

无论nuxtJs 与 nextJs 均为这种模式

## 参考
- [Nuxt.js中文文档](https://zh.nuxtjs.org/guide/installation)
