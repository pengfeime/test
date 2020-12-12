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

                <div v-if="!this.$store.getters.getToken">
                    <li><router-link to="/login">登录</router-link></li>
                    <li><router-link to="/reg">注册</router-link></li>
                </div>
                <div v-else>
                    <li><router-link to="/login">个人中心</router-link></li>
                    <span @click="logout">登出</span>
                </div>
            </ul>
        </div>

    </div>

</template>

<script>
    export default {
        name: "navbar",
        data(){
          return {

          }
        },
        methods:{
            logout(){
                // 先本地清除token
                localStorage.removeItem('TokenInvalid')
                this.$store.commit('handleToken',false)
                this.$http.get('http://127.0.0.1:3000/logout',{
                    headers:{
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                    .then((res) => {
                        console.log(res.data)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
        },
        mounted(){

        }
    }
</script>

<style lang="less" scoped>
    @import "../assets/styles/navbar";
</style>
