const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}


module.exports = {
  // 配置src路径别名
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}