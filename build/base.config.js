// npm init  项目初始化生成 package.json
// package.json 里内容是项目信息 
// 使用 npm install 可以把package.json 里的包 自动安装
// 下面这行代码需要 package.json
const path = require("path");
    // 导入了一个path 包
const { VueLoaderPlugin } = require('vue-loader');
// 导入 vue-loader 包
const webpack = require('webpack');
// npm install html-webpack-plugin --save-dev
// 添加可以 打包 html 到 bundle里面的 包  然后导入它
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 导入可以压缩js文件的包
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
    entry: "./src/main.js",
    output: {
        // path包里面的方法，获取当前文件的绝对路径，然后拼接起来
        // 导出到 上一级文件 的dist
        path: path.resolve(__dirname, '../dist'),
        filename: "bundle.js"
    },
    mode: "development",
    // development,production
    // 开发和生产构建的目标差别很大。
    // 在开发中，我们需要强大的源映射和具有实时重新加载或热模块替换的本地主机服务器。
    // 在生产中，我们的目标转向关注缩小包、更轻量级的源映射和优化资产以缩短加载时间
    module: {
        rules: [{
                test: /\.css$/,
                // css-loader 只负责加载
                // style-loader 负责加到DOM
                // 下面代码有顺序
                use: ["style-loader", 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                // 加个 jpeg
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        // 当加载的图片KB*1024 大于下面数字 需要用 file-loder 不用配置
                        // 小于时 会把图片变成base64 字符串形式传出
                        limit: 8192,
                        name: "img/[name].[hash:8].[ext]"
                    }

                }]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
              }
        ]
    },
    plugins: [
        // 请确保引入这个插件！Vue 才能用
        new VueLoaderPlugin(),
        // 加入版权的 banner
        new webpack.BannerPlugin('最终版权归 langlang 所有'),
        //加入 打包HTML的包
        new HtmlWebpackPlugin({
            //以 这个为模板生产 就可以加上 div id = app 因为他会自动引入bundle.js 所以之前
            // 在 index 写的 script src="./dist/bundle.js"></script> 可以删了
            template:'index.html'
        }),

        // 抽离到prod.confing.js生产用的配置

        // 加入 压缩js代码 的包 上线时在用，不然不好调试
        // new UglifyJsPlugin(),

      ],
      
        // 抽离到dev.confing.js 开发用的配置

    // 上线时 devserver 的配置 就可以不要了
    // devServer: {
    //     // 修改配置文件，告知 dev server，从什么位置查找文件
    //     // 告知 webpack-dev-server，将 dist 目录下的文件 serve 到 localhost:8080 下
    //     // "start": "webpack serve --open"  添加快捷指令 在pack.json
    //     // ctrl + c 终止
    //     contentBase: './dist',
    //     inline:true //保持监听
    //   },  
    resolve:{
        // alias别名的意思
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        }
    }
}

// 使用 npm run XXXX 可以在 package.json 文件中找到scripts 这个里面 name 对印的方法
//  例子 npm run build  运行的是 webpack 添加了这个 会自动运行本地的 webpack 不是全局的

// npm install webpack@3.6.0 --save-dev 
// --save-dev 开发时依赖的意思 打包之后就没用了 
// 如果你是前端人员，项目在浏览器运行的，无所谓开发依赖还是生产依赖，只是习惯而已最终都会打包到一起的，如果你要发npm包，那就要区分下，因为你的包在别人用的时候要找里面的依赖会通过你的pack.json 去找你的的依赖，他在安装你的包同时，就把生产依赖的包一块安装了

// npm install --save-dev css-loader 安装css-loader 就可以用css了
// npm install style-loader --save-dev