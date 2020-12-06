<template>
    <div id="app">
        <navbar ref="navbar"></navbar>
        <div class="content">
          <side class="aside"></side>
          <router-view class="main"></router-view>
        </div>
        <foot></foot>
    </div>
</template>

<script>
    import navbar from './Navbar'
    import side from './Aside'
    import foot from './Footer'
    export default {
        name: 'App',
        components: {navbar,side,foot}
    }
</script>

<style lang="less">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        height:100%;
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
            .aside{
                display:inline-block;
                width:4rem;
            }
            .main{
                flex:1;
            }
        }
    }
</style>
