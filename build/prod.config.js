// 导入 webpack-merge 这个包 可以把 两个配置文件合并
const webpackMerge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./base.config');

// 将base.config 公用配置 和 dev 配置进行合并，以后生产的时候就用这个文件导出的配置
// 在package.json 里面的 scripts 设置使用这个文件 设置在下面  --config ./build/prod.config.js
// "build": "webpack --config ./build/prod.config.js",
// base 的 output 路径需要修改 path: path.resolve(__dirname, '../dist'),

module.exports = webpackMerge.merge(baseConfig,{
    plugins: [
        // 加入 压缩js代码 的包 上线时在用，不然不好调试
        new UglifyJsPlugin(),
      ]
})

