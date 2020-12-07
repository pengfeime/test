<template>
    <div id="login">
        <div class="main_zone">
            <p class="title">弘扬刺绣文化</p>
            <div class="avatar">
                <router-link to="/">
                    <img src="" alt="">
                </router-link>
            </div>
            <p>new bee</p>
            <div class="login">
                <div class="tab">
                    <div>密码登录</div>
                    <div>短信登录</div>
                </div>
                <div>
                    <input type="text" name="nickname" placeholder="账号"/>
                    <router-link to="/">忘记登录用户名</router-link>
                </div>
                <div>
                    <input type="text" name="password" placeholder="密码">
                    <router-link to="/">忘记登录密码</router-link>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style lang="less" scoped>
    #login{
        position:fixed;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background: #e0e4e8;
        z-index:101;
        .main_zone{
            position:absolute;
            width:15rem;
            height:18rem;
            top:0;
            left:0;
            right:0;
            bottom: 0;
            margin:auto;
            background: #ffffff;
            .title{
                text-align:center;
                color:#393b3d;
                font-size:.8rem;
                margin:1rem;
            }
            .avatar{
                a{
                    img{
                        display: block;
                        width:3rem;
                        height:3rem;
                        margin:0 auto;
                        background: url("../assets/imgs/6.jpg") center/cover no-repeat;
                        border-radius:50%;
                    }
                }
            }
            .avatar+p{
                color:red;
                font-size:.6rem;
            }
            .login{
                .tab{
                    width:100%;
                    height:2rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    padding:.5rem 1rem;
                    div{
                        flex:1;
                        margin:.1rem;
                        font-size:.6rem;
                        border-bottom: 2px solid #67affd;
                    }
                }
                div{
                    input{
                        display: block;
                        font-size:.6rem;
                        width:~"calc(100% - 2rem)";
                        margin:.2rem auto;
                        text-indent: .5rem;
                    }
                    a{
                        display: block;
                        width:~"calc(100% - 1rem)";
                        text-align:right;
                        font-size:.5rem;
                    }
                }

            }
        }
    }
</style>
