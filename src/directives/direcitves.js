// 指令会对普通DOM元素进行底层操作
let directives = [
    {
        name: 'limitPsw',
        bind_evt: {
            bind(el){
                let pattern = /[0-9a-zA-Z]{6,12}/
                el.onblur = (e) => {
                    let {value} = e.target
                    if(pattern.test(value)){
                        e.target.dataset.tip = '密码格式正确'
                        e.target.dataset.psw_statu = true
                    }else if(value.trim() == ''){
                        e.target.dataset.tip = '输入不能为空'
                        e.target.dataset.psw_statu = ''
                    }else{
                        e.target.dataset.tip = '密码格式不正确'
                        e.target.dataset.psw_statu = ''
                    }
                }
            }
        }
    },
    {
        name:'limitMail', // 邮箱格式
        bind_evt: {
            bind(el) {
                // eslint-disable-next-line no-useless-escape
                let pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([a-zA-Z]{2,4})$/
                el.onblur = (e) => {
                    let {value} = e.target
                    if(pattern.test(value)){
                        e.target.dataset.tip = '邮箱格式正确'
                        e.target.dataset.mail_statu = true
                    }else if(value.trim() == ''){
                        e.target.dataset.tip = '输入不能为空'
                        e.target.dataset.mail_statu = ''
                    }else{
                        e.target.dataset.tip = '邮箱格式不正确'
                        e.target.dataset.mail_statu = ''
                    }
                }
            }
        }
    },
    {
        name:'limitTel',
        bind_evt:{
            bind(el){
                let pattern = /^1[0-9]{10}$/
                el.oninput = (e) => {
                        e.target.value = e.target.value.replace(/\D/,'')
                }
                el.onblur = (e) => {
                    let {value} = e.target
                    value = value.replace(/\D/,'')
                    if(pattern.test(value)){
                        e.target.dataset.tip = '手机号格式正确'
                        e.target.dataset.tel_statu = true
                    }else if(value.trim() == ''){
                        e.target.dataset.tip = '输入不能为空'
                        e.target.dataset.tel_statu = ''
                    }else{
                        e.target.dataset.tip = '手机号格式不正确'
                        e.target.dataset.tel_statu = ''
                    }
                }
            }
        }
    },
    {
        name:'limitNick',
        bind_evt:{
            bind(el){
                let pattern1 = /^[a-zA-Z_0-9\u4e00-\u9fa5]{4,12}$/, // 注意这里不能使用g进行全局匹配，全局匹配会有lastIndex属性，会记录上一次匹配到的位置，默认lastIndex =0
                    pattern2 = /_/,  // _字符最多可以出现一次
                    tipText = ''
                el.onblur = (e) => {
                    const {value} = e.target
                    let len = value.length,count = 0
                    for(let i=0;i<len;i++){
                        if(pattern2.test(value[i])){
                            console.log(value[i])
                            count++
                        }
                    }
                    if(pattern1.test(e.target.value)){
                        if(count<=1){
                            console.log('格式正确')
                            tipText = '格式正确'
                            e.target.dataset.nick_statu = true
                        }else{
                            console.log('_字符不能多余一个!')
                            tipText = '_字符不能多余一个!'
                            e.target.dataset.nick_statu = ''
                        }
                    }else if(e.target.value.trim() == ''){
                        e.target.dataset.tip = '输入不能为空'
                        e.target.dataset.nick_statu = ''
                    }else{
                        tipText = '格式有误，昵称可包含数字、大小写字母、下划线（不能多于1个）、汉字，总长度在4-12个之间'
                        e.target.dataset.nick_statu = ''
                    }
                    // vue数据是不可以双向绑定的，所以这里通过元素的dataset来向元素传值
                    e.target.dataset.tip = tipText
                }
            }
        }
    },
    {
        name:'autoNextIpt', // enter时自动跳转到下一个input
        bind_evt:{
            inserted(el,binding){
                el.addEventListener('keypress',(e) => {
                    e = e || window.event
                    // 兼容不同浏览器
                    let charcode = typeof e.charCode == 'number'?e.charCode:e.keyCode
                    if(charcode == 13){
                        // 需要找出本页面的所有input
                        let inputWrap = document.getElementById(binding.value.id)
                        let dom = inputWrap.querySelectorAll('input'),
                            len = dom.length
                        for(let i=0;i<len;i++){
                            if(dom[i] == document.activeElement){
                                if(i == len)return
                                dom[i].blur()
                                if(i<len-1){
                                    dom[i+1].focus()
                                }
                                return
                            }
                        }
                    }
                })
            }
        }
    }
]
export default directives
