<template>
    <div id="app">
        <navbar ref="navbar"></navbar>
        <div class="content">
          <router-view class="main"></router-view>
        </div>
        <foot></foot>
    </div>
</template>

<script>
    import navbar from './Navbar'

    import foot from './Footer'
    export default {
        name: 'App',
        components: {navbar,foot},
        watch:{
            "$route":function () {
                let that = this
                console.log('当前路由',that.$route.name)
            }
        }
    }
</script>

<style lang="less">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        height:100%;
        padding:0;
        margin:0;
        li{
            list-style:none;
        }
        a{
            text-decoration:none;
            outline:none;
            color:#ccc;
        }
        .content{
            display:flex;
            height:~"calc(100vh - 10rem)";
            overflow:scroll;
            .main{
                flex:1;
            }
        }
    }
</style>
