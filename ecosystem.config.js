module.exports = {
  apps : [{
    name: "prod",
    script: "./server/index.js",
    env: {
      NODE_ENV: "production",
    }
  }]
}