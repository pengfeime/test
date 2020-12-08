<template>
    <div id="header" >
        <h3>LEADSHOW</h3>
        <div ref="nav" :style="{height:this.$store.getters.getScroll?'2rem':'1.5rem',opacity:this.$store.getters.getScroll?'.8':'1'}">
            <ul class="nav">
                <li><router-link to="/">首&nbsp;页</router-link></li>
                <li><router-link to="/news">新闻中心</router-link></li>
                <li><router-link to="/">操作说明</router-link></li>
                <li><router-link to="/">购物车</router-link></li>
                <li><router-link to="/">个人中心</router-link></li>
            </ul>
            <ul class="login">
                <li><router-link to="/login">登录</router-link></li>
                <li><router-link to="/reg">注册</router-link></li>
            </ul>
        </div>

    </div>

</template>

<script>
    export default {
        name: "navbar",
        methods:{
        },
        mounted(){

        }
    }
</script>

<style lang="less" scoped>
    @import "../assets/styles/navbar";
</style>
