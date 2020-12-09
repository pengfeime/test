<template>
    <div id="reg">
        <div>
            <p>注册新用户</p>
            <hr>
            <div class="row">
                <form action="">
                    <div class="form_row">
                        <label for="mail">邮箱</label>
                        <input type="text" placeholder="请输入邮箱号" id="mail" v-model="fillData.mail">
                    </div>
                    <div class="form_row">
                        <label for="tel">手机号码</label>
                        <input type="text" placeholder="请输入手机号" id="tel" v-model="fillData.tel_num">
                    </div>
                    <div class="form_row">
                        <label for="nick">用户名</label>
                        <input type="text" placeholder="请输入昵称" id="nick" v-model="fillData.nickname">
                    </div>
                    <div class="form_row">
                        <label for="psw">设置密码</label>
                        <input type="password" placeholder="请设置密码" id="psw" v-model="fillData.password">
                    </div>
                    <div class="form_row">
                        <label for="re_psw">再次输入</label>
                        <input type="password" placeholder="请重新输入密码" id="re_psw">
                    </div>
                </form>
            </div>
            <div class="fill_ok">
                <button @click="reg">注册</button>
                <p>点击此按钮，即表示您已阅读并同意遵守此条约</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "reg",
        data(){
          return {
              fillData:{
                  mail:'',
                  tel_num:'',
                  nickname:'',
                  password:''
              }
          }
        },
        methods:{
            reg(){

                // 注意data里的fillData是__ob__:Observer是不可枚举的
                let fillData = JSON.parse(JSON.stringify(this.fillData))
                let formData = new FormData() // post需要formdata格式
                console.log(fillData)
                for(let key in fillData){
                    formData.append(key,fillData[key])
                    console.log(formData)
                }
                // 提交注册
                this.$http.post('http://127.0.0.1:3000/reg',
                    this.$qs.stringify(fillData)
                    )
                    .then((res) => {
                        console.log(res)
                    })
                    .catch((err) => {
                        console.log(err)
                    })

            }
        }
    }
</script>

<style lang="less" scoped>
    #reg{
        margin:3rem;
        width:80%;
        @media (min-width:750px){
            margin-left:5rem;
        }
        &>div{
            width:80%;
            @media (min-width:750px){
                width:60%;
            }
            p{
                text-align: left;
            }
            .row{
                form{
                    width: 100%;
                    .form_row{
                        display: flex;
                        margin:1rem .2rem .3rem 0;
                        align-items:center;
                        text-align: left;
                        font-size:.5rem;
                        label{
                            display: inline-block;
                            width:4rem;
                            min-width:3.8rem;
                            white-space:nowrap;

                        }
                        &:nth-child(1){
                            label{
                                letter-spacing: 1.6rem;
                            }
                        }
                        &:nth-child(2){
                            label{
                                letter-spacing: .1rem;
                            }
                        }
                        &:nth-child(3){
                            label{
                                letter-spacing: .3rem;
                            }
                        }
                        &:nth-child(4){
                            label{
                                letter-spacing: .1rem;
                            }
                        }
                        &:nth-child(5){
                            label{
                                letter-spacing: .1rem;
                            }
                        }

                        input{
                            flex: 1;
                            outline:none;
                            text-indent:.5rem;
                            border-radius: 5px;
                            border:1px solid #ccc; // 这是为消除边框内阴影
                        }
                    }
                }
            }
            .fill_ok{
                margin:1rem .5rem;
                font-size:.5rem;
                button{
                    width:3rem;
                    background: #55a18b;
                    color: white;
                    border-radius: 4px;
                    outline: none;
                }
              p{
                  margin: .4rem;
                  text-align:center;
                  transform:scale(.8);
              }
            }
        }
    }
</style>
