const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    host:'172.20.10.3',
    port:8080,
}}
)


// module.exports = {
//   devServer: {
//       public: 'http://172.20.10.3:8080/',
//   }
// }