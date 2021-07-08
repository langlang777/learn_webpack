<template>
<!-- 必须带div -->
    <div class="red">
        <h2>我是标题</h2>
        <p> 我是内容 哈哈哈</p>
        <h2>name: {{name}}</h2>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            name:"我是cpn01的name"
        }
    },
}
</script>

<style>
    .red {
        color: red;
    }
</style>