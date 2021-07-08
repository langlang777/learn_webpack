// 默认方式导出 不需要命名 导出的就是这个对象
export default {
    template:`
    <div>
    <h2>{{message}}</h2>
    <button @click="btnclick"> 按钮 </button>
    </div>
    `,
    data() {
        return {
            message:"qiqi ai langlang"
        }
    },
    methods: {
        btnclick(){
            console.log(123456);
        }
    },
}