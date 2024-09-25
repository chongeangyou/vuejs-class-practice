const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    //proxy: 'http://172.23.129.202'
    //proxy: 'http://localhost:80/docs'
    // proxy: 'https://api.tfdevs.com'
    proxy: process.env.VUE_APP_URL
  }
})
