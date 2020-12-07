<template>
    <div>
        <div>气吞山河</div>
        <button @click="getData">请求后端数据</button>
        <button @click="submitData">提交数据</button>
    </div>
</template>

<script>
    export default {
        name: "pageconquer",
        data(){
          return {
              count_info:{
                  name:'李磊',
                  password:123456
              }
          }
        },
        methods:{
            getData(){
                this.$http.get('http://127.0.0.1:3000').then((res) => {
                    console.log(res)
                })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            submitData(){
                this.$http.post('http://127.0.0.1:3000/submit',this.$qs.stringify({name:'李磊',password:123456}),{headers: {
                    // axios默认把数据以json的格式发送给后端，这与后端要求的‘content-Type’不符,需要手动修改
                    // 改写头部导致后端接收数据格式错误，需要使用qs模块将数据以a=xxx&b=xx
                    'Content-Type': 'application/x-www-form-urlencoded'
                }})
                    .then((res) => {
                        console.log(res.data)
                    })
                    .catch((err) => {

                        console.log(err)
                    })
            }
        }
    }
</script>

<style scoped>

</style>
