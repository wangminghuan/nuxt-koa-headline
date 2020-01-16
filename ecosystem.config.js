module.exports = {
  apps : [{
    name: "nuxt-koa-headline",
    script: "./server/index.js",
    env: {
      NODE_ENV: "production",
    }
  }]
}