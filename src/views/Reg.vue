<template>
    <div id="reg">
        <div>
            <p>注册新用户</p>
            <hr>
            <div class="row">
                <form action="">
                    <div class="form_row">
                        <label for="mail">邮箱</label>
                        <div class="input_zone">
                            <input type="text" placeholder="请输入邮箱号" id="mail" ref="r_mail" v-model="fillData.mail"  v-auto-next-ipt="{id:'reg'}" v-limit-mail data-mail_statu="" data-tip="" @blur="iptBlur('mail')">
                            <div :class="{green:mail_statu}">{{mail_tip}}</div>
                        </div>

                    </div>
                    <div class="form_row">
                        <label for="tel">手机号码</label>
                        <div class="input_zone">
                            <input type="text" placeholder="请输入手机号" id="tel" ref="r_tel" v-model="fillData.tel_num" v-auto-next-ipt="{id:'reg'}" v-limit-tel data-tel_statu="" data-tip=""  @blur="iptBlur('tel')">
                            <div :class="{green:this.tel_statu}">{{this.tel_tip}}</div>
                        </div>

                    </div>
                    <div class="form_row">
                        <label for="nick">用户名</label>
                        <div class="input_zone">
                            <input type="text" placeholder="请输入昵称" id="nick" ref="r_nick" v-model="fillData.nickname" v-auto-next-ipt="{id:'reg'}" v-limit-nick data-nick_statu="" data-tip="" @blur="iptBlur('nick')">
                            <div :class="{green:this.nick_statu}">{{this.nick_tip}}</div>
                        </div>

                    </div>
                    <div class="form_row">
                        <label for="psw">设置密码</label>
                        <div class="input_zone">
                            <input type="password" placeholder="请设置密码" id="psw" ref="r_psw" v-model="fillData.password" v-auto-next-ipt="{id:'reg'}" v-limit-psw data-psw_statu="" data-tip="" @blur="iptBlur('psw')">
                            <div :class="{green:this.psw_statu}">{{this.psw_tip}}</div>
                        </div>

                    </div>
                    <div class="form_row">
                        <label for="re_psw">再次输入</label>
                        <div class="input_zone">
                            <input type="password" placeholder="请重新输入密码" id="re_psw" ref="r_rpsw" v-auto-next-ipt="{id:'reg'}" @blur="iptBlur('rePsw')">
                            <div :class="{green:this.rePsw_statu}">{{this.rePsw_tip}}</div>
                        </div>

                    </div>
                </form>
            </div>
            <div class="fill_ok">
                <Tooltip content="存在不正确格式，请核对填写" placement="top" v-if="!(this.mail_statu && this.nick_statu && this.psw_statu && this.rePsw_statu && this.tel_statu)">
                    <button @click="reg">注册</button>
                </Tooltip>
                <button @click="reg" v-else>注册</button>

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
              },
              nick_tip:'',
              nick_statu:'',
              tel_tip:'',
              tel_statu:'',
              psw_tip:'',
              psw_statu:'',
              mail_tip:'',
              mail_statu:'',
              rePsw_tip:'',
              rePsw_statu:'',
              status:''
          }
        },
        methods:{
            reg(){
                let that = this
                this.status = this.mail_statu && this.nick_statu && this.psw_statu && this.rePsw_statu && this.tel_statu
                if(!this.status) return
                // 注意data里的fillData是__ob__:Observer是不可枚举的
                let fillData = JSON.parse(JSON.stringify(this.fillData))
                // 提交注册
                this.$http.post('http://127.0.0.1:3000/reg',
                    this.$qs.stringify(fillData)
                    )
                    .then((res) => {
                        console.log(res)
                        // 注册成功需要跳转至登录页面
                        that.$router.push({
                            path:'/login',
                            query:{
                                nickname:this.fillData.nickname
                            }
                        })
                    })
                    .catch((err) => {
                        console.log(err)
                    })

            },
            iptBlur(type){
                setTimeout(() => {
                    // 由于nickBlur事件会优于detective自定义事件触发导致获取到的dataset不是最新，所以这里要把获取属性延迟
                    switch (type){
                        case 'nick':
                            this.nick_tip = this.$refs.r_nick.dataset.tip
                            this.nick_statu = this.$refs.r_nick.dataset.nick_statu
                            break
                        case 'tel':
                            this.tel_tip = this.$refs.r_tel.dataset.tip
                            this.tel_statu = this.$refs.r_tel.dataset.tel_statu
                            break
                        case 'mail':
                            this.mail_tip = this.$refs.r_mail.dataset.tip
                            this.mail_statu = this.$refs.r_mail.dataset.mail_statu
                            break
                        case 'psw':
                            this.psw_tip = this.$refs.r_psw.dataset.tip
                            this.psw_statu = this.$refs.r_psw.dataset.psw_statu
                            break
                        case 'rePsw':
                            if(!!this.$refs.r_rpsw.value && (this.$refs.r_rpsw.value === this.$refs.r_psw.value)){
                                this.rePsw_statu = true
                                this.rePsw_tip = '输入正确'
                            }else if(this.$refs.r_rpsw.value == ''){
                                this.rePsw_statu = ''
                                this.rePsw_tip = '输入不能为空'
                            }else{
                                this.rePsw_statu = ''
                                this.rePsw_tip = '密码输入不一致'
                            }
                            break
                    }
                },0)
            }
        }
    }
</script>

<style lang="less" scoped>
    #reg{
        margin:2rem;
        width:80%;
        @media (min-width:750px){
            margin-left:5rem;
        }
        &>div{
            p{
                text-align: left;
            }
            .row{
                form{
                    width: 100%;
                    .form_row{
                        display: flex;
                        height:2.5rem;
                        width:100%;
                        margin:.3rem .2rem .3rem 0;
                        align-items:baseline;
                        text-align: left;
                        overflow: hidden;
                        font-size:.8rem;
                        &:nth-child(1){
                            margin-top:1rem;
                        }
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
                        .input_zone{
                            flex: 1;
                            width:~"calc(100% - 4rem)";
                            input{
                                width:80%;
                                outline:none;
                                text-indent:.5rem;
                                border-radius: 5px;
                                border:1px solid #ccc; // 这是为消除边框内阴影
                                @media (min-width:750px){
                                    width:60%;
                                }
                            }
                            div{
                                max-width:80%;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                @media (min-width:750px){
                                    width:60%;
                                }
                                text-align: right;
                                color: red;
                                font-size:.5rem;
                            }
                            .green{
                                color: green;
                            }
                        }

                    }
                }
            }
            .fill_ok{
                width:~"calc((100% - 4rem)*.8 + 4rem)";
                @media (min-width:750px){
                    width:~"calc((100% - 4rem)*.6 + 4rem)";
                }
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
