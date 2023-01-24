const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  chainWebpack: config => {
    config.plugins.delete('prefetch');
  }
}
// const target = 'http://127.0.0.1:3000';
// module.exports = {
//   devServer: {
//     ports: 8080,
//     proxy: {
//       '^/api': {
//         target, 
//         changeOrigin: true
//       }
//     }
//   }
// }