// 导入 webpack-merge 这个包 可以把 两个配置文件合并
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

// 将base.config 公用配置 和 dev 配置进行合并，以后开发的时候就用这个文件导出的配置
// 在package.json scripts 里面设置使用这个文件 --config ./build/dev.config.js
// "dev": "webpack serve --open --config ./build/dev.config.js"
module.exports = webpackMerge.merge(baseConfig,{
    devServer: {
        // 修改配置文件，告知 dev server，从什么位置查找文件
        // 告知 webpack-dev-server，将 dist 目录下的文件 serve 到 localhost:8080 下
        // "start": "webpack serve --open"  添加快捷指令 在pack.json
        // ctrl + c 终止
        contentBase: '../dist',
        inline:true //保持监听
      }, 
})


