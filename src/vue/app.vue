<template>
    <div>
        <h2 class="title">{{message}}</h2>
        <button @click="btnclick"> 按钮 </button>
        <!-- 使用子组件 -->
        <cpn></cpn>
    </div>
    
</template>

<script>
// 导入子组件
import Cpn01 from './Cpn01.vue'

export default {
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
    // 注册子组件
    components:{
        cpn:Cpn01
    }
}
</script>

<style>
    .title {
        color: pink;
    }
</style>