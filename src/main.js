// npm run build （使用的是 webpack 命令）打包文件 在package.json scripts 配置 快捷使用
// commonjs 的模块化
const { add, mul } = require("./js/mathUtils")
console.log(add(20, 30));
console.log(mul(10, 20));

// es6 的模块化
import { name, hight, sex } from "./js/info";
console.log(name);
console.log(hight);
console.log(sex);

// webpack ./src/main.js -o ./dist/bundle.js

// 依赖css 进行打包css
require("./css/style.css")

//依赖 less 文件
// npm install --save-dev less-loader less
require("./css/special.less")

// document.writeln("<h2>你好啊，langlang!</h2>")

// 使用Vue开发 引入Vue
import Vue from 'vue'

// 需要在webpack里指定可以编译组件的版本 使用resolve 属性指定
// 当vue运行时它就会去node_modules 这个文件夹找

// 下面是不抽离写法
// new Vue({
//     el:"#app",
//     // 如果有el 和 template 同时存在 vue 会用 template 代替 index.html 里面的 id = app的 div
//     // 到dom 是看不到那个 id=app 的div
//     template:`
//     <div>
//     <h2>{{message}}</h2>
//     <button> 按钮 </button>
//     </div>
//     `,
//     data:{
//         message:"hello webpack"
//     }
// })

// 下面是抽离写法
// 定义一个组件
// 把这个组件移到 vue/app.js 里面去

// const cpn = {
//     template:`
//     <div>
//     <h2>{{message}}</h2>
//     <button @click="btnclick"> 按钮 </button>
//     </div>
//     `,
//     data() {
//         return {
//             message:"qiqi ai langlang"
//         }
//     },
//     methods: {
//         btnclick(){
//             console.log(123456);
//         }
//     },
// }

// 移动完后在导入 下面这个是半成品 
// import cpn from './vue/app.js'
// 真正抽离 到 app.vue 里 然后导入

import cpn from './vue/app.vue'
// https://vue-loader.vuejs.org/zh/guide/#vue-cli
// 安装 下面这两个包才能解析 vue文件 ，然后去 webpack 配置
// npm install -D vue-loader vue-template-compiler

new Vue({
    el:'#app',
    // 用 template 代替 index.html 里面的 id = app的 div
    // 如果有el 和 template 同时存在 vue 会用 template 代替 index.html 里面的 id = app的 div
    template:'<cpn/>',
    // 注册组件 语法糖
    components:{
        cpn:cpn
    }
})
