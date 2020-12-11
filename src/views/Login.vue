<template>
    <div id="login">
        <div class="main_zone">
            <div class="close" @click="this.toHome">x</div>
            <p class="title">弘扬刺绣文化</p>
            <div class="avatar">
                <router-link to="/">
                    <img src="" alt="">
                </router-link>
            </div>
            <p>new bee</p>
            <div class="login">
                <div class="tab">
                    <div @click="loginOnPsw=true" :class="{hasborder:loginOnPsw}">密码登录</div>
                    <div @click="loginOnPsw=false" :class="{hasborder: !loginOnPsw}">短信登录</div>
                </div>
                <!--                密码登录模块-->
                <div :class="{off:!loginOnPsw}" id="login_pwd">
                    <div>
                        <input type="text" name="nickname" placeholder="账号" class="user" ref="nickname" v-auto-next-ipt="{id:'login_pwd'}"/>
                        <router-link to="/">忘记登录用户名</router-link>
                    </div>
                    <div>
                        <input type="text" name="password" placeholder="密码" class="user" ref="password" v-auto-next-ipt="{id:'login_pwd'}">
                        <router-link to="/">忘记登录密码</router-link>
                    </div>
                    <div class="remember">
                        <label for="check" @click="() => {
                    // 点击label会触发冒泡事件，同时点击label也相当于点击了input，所以会触发俩次
                            return false
                        }">
                            <input type="checkbox" @click="checkStatus" ref="checkBox" id="check">
                            <span class=" fakebox"></span>
                            <span>记住我</span>
                        </label>
                    </div>
                </div>

                <!--手机号登录-->
                <div :class="{off:loginOnPsw}" class="phone_zone" id="login_tel">
                    <div>
                        <input type="text" name="nickname" placeholder="请输入手机号" class="user" v-auto-next-ipt="{id:'login_tel'}"/>
                        <router-link to="/">手机号</router-link>
                    </div>
                    <div class="phone">
                        <input type="text" name="password" placeholder="请输入6位数验证码" class="user" v-auto-next-ipt="{id:'login_tel'}">
                        <button>获取验证码</button>
                    </div>
                    <div class="remember">
                        <label for="check_two" @click="() => {
                    // 点击label会触发冒泡事件，同时点击label也相当于点击了input，所以会触发俩次
                            return false
                        }">
                            <input type="checkbox" @click="checkStatus" ref="checkBox" id="check_two">
                            <span class=" fakebox"></span>
                            <span class='rem_two' :style="{color:isCheck?'green':'grey'}">记住我</span>
                        </label>
                    </div>
                </div>
                <Button class="submit" type="primary" @click="login">登录</Button>
            </div>
<!--            注册-->
            <div class="reg">
                <span>没有账号,</span>
                <span><router-link :to="{name:'reg'}">立即注册</router-link></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                loginOnPsw: true, // 默认密码登录
                isCheck:false,
                loginInfo:{
                    nickname:'',
                    password:''
                }
            }
        },
        mounted(){
            this.$refs.nickname.value = this.$route.query.nickname?this.$route.query.nickname:''
        },
        methods: {
            checkStatus() {
                if (this.$refs.checkBox.checked) {
                    this.isCheck = true
                    this.$refs.checkBox.nextSibling.style.cssText = 'background:transparent;opacity:1'
                } else {
                    this.isCheck = false
                    this.$refs.checkBox.nextSibling.style = 'background :lightgray'
                }
            },
            toHome(){
                this.$router.push('/')
            },
            login(){
                const nickname = this.$refs.nickname.value,
                      password = this.$refs.password.value
                this.loginInfo = {nickname,password}
                this.$http.post('http://127.0.0.1:3000/login',this.$qs.stringify(this.loginInfo),{headers: {
                        // axios默认把数据以json的格式发送给后端，这与后端要求的‘content-Type’不符,需要手动修改
                        // 改写头部导致后端接收数据格式错误，需要使用qs模块将数据以a=xxx&b=xx
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }})
                    .then((res) => {
                        const {Token} = res.data
                        // 保存token
                        localStorage.setItem('Token',Token)
                        console.log(localStorage.getItem('Token'))
                        // 再次请求服务器，把token发送给后台
                        this.$http.get(`http://127.0.0.1:3000/checktoken?Token=${Token}`,{headers: {
                                // axios默认把数据以json的格式发送给后端，这与后端要求的‘content-Type’不符,需要手动修改
                                // 改写头部导致后端接收数据格式错误，需要使用qs模块将数据以a=xxx&b=xx
                                'Content-Type': 'application/x-www-form-urlencoded'
                            }},{withCredentials:true})
                            .then((res) => {
                                console.log(res)
                                localStorage.setItem('TokenInvalid',res.data.TokenInvalid)
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                    })
                    .catch((err) => {
                        console.log('err',err)
                    })
            }
        }
    }
</script>

<style lang="less" scoped>
    #login {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #e0e4e8;
        z-index: 101;

        .off {
            display: none;
        }

        .main_zone {
            position: absolute;
            width: 15rem;
            height: 20rem;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            background: #ffffff;
            box-shadow: 2px 2px 5px 3px #ccc;
            .close{
                position: absolute;
                width:1rem;
                height:1rem;
                line-height: 1rem;
                top:0;
                right:0;
                text-align: center;
                color:#6a6b6c;
                cursor:pointer;
            }
            .title {
                text-align: center;
                color: #393b3d;
                font-size: .8rem;
                margin: 1rem;
            }

            .avatar {
                a {
                    img {
                        display: block;
                        width: 3rem;
                        height: 3rem;
                        margin: 0 auto;
                        background: url("../assets/imgs/6.jpg") center/cover no-repeat;
                        border-radius: 50%;
                    }
                }
            }

            .avatar + p {
                color: red;
                font-size: .6rem;
            }

            .login {
                .tab {
                    width: 100%;
                    height: 2rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    padding: .5rem 1rem;
                    cursor:pointer;
                    div {
                        flex: 1;
                        margin: .1rem;
                        padding:.2rem;
                        font-size: .6rem;
                        border-bottom: 2px solid transparent;
                    }

                    .hasborder {
                        border-bottom: 2px solid #67affd;
                    }
                }

                div {
                    div {
                        .user {
                            display: block;
                            height:1.5rem;
                            font-size: .6rem;
                            width: ~"calc(100% - 2rem)";
                            margin: .2rem auto;
                            text-indent: .5rem;
                        }

                        a {
                            display: block;
                            width: ~"calc(100% - 1rem)";
                            text-align: right;
                            font-size: .5rem;
                        }
                    }

                    .remember {
                        width: 5rem;
                        margin-left: 1rem;

                        label {
                            display: flex;
                            position: relative;
                            align-items: center;
                            font-size: .5rem;

                            input {
                                vertical-align: top; // 解決input和span标签高度不齐问题
                                width: .8rem;
                                height: .8rem;
                                outline: none;
                                color: red;
                                /*input设置type为checkbox之后设置背景色失效*/
                                //-webkit-appearance: none;
                            }

                            .fakebox {
                                position: absolute;
                                width: .8rem;
                                height: .8rem;
                                background: lightgray;
                                border-radius: 2px;
                                vertical-align: top;
                                opacity: .5;
                            }

                            .fakebox + span {
                                display: inline-block;
                                margin-left: .3rem;
                                vertical-align: top;
                            }


                        }
                    }
                }
                .phone_zone{
                    .phone{
                        width:~"calc(100% - 2rem)";
                        display:flex;
                        align-items: center;
                        height:2rem;
                        margin:auto;
                        input{
                            flex:1;
                            height:1.5rem;
                        }
                        button{
                            display: inline-block;
                            width:4.5rem;
                            height:1.5rem;
                            font-size:.5rem;
                        }
                    }
                    .remember{
                        margin-top:1rem;
                    }
                }
                .submit{
                    width: 4rem;
                    padding:.1rem .4rem;
                }
            }
            .reg{
                height:1rem;
                font-size:.6rem;
                text-align:center;
                span:nth-child(2){
                    padding-left:.2rem;
                    a{
                        color:darkgreen;
                    }

                }
            }
        }
    }
</style>
