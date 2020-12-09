// 管理访问路由
const Router = require('koa-router')
const router = new Router()

const connection = require('./db')
const $sql = require('./sqlMap')
const {user,handle_table} = $sql
const koajwt = require('koa-jwt') // 提供路由权限控制功能，对需要限制的资源进行检查
// 通过app.use 来调用该中间件，并传入密钥,unless可以指定哪些url可以不要token校验
const config = require("./token/config")
// 开启路由验证
// app.use(koajwt({
//     secret:config.secret
// })
//     .unless({
//         path:[/\admin/]
//     }))



// 查找注册名
function findNick(nickname,password,tel_num,mail){
    return new Promise((resolve,reject) => {
        connection.query(user.getUser,[nickname],async (err,result) => {
            if(err){
                reject(err)
                console.log('哎呀出错啦')
            }else if(result){
                console.log('后台查找到的数据',result)
                // 该用户名已被使用
                console.log('该用户名已被使用，请重新填写')
                resolve({
                    res:'该用户名已被使用，请重新填写',
                    code:'400'
                })
            }else{
                console.log('可以使用的用户名')
                // 可以注册
                await connection.query(user.addUser,[nickname,password,tel_num,mail],(err,success) => {
                    if(success){
                        console.log('后台注册成功')
                        resolve({
                            res:'注册成功',
                            code:'200'
                        })
                    }else{
                        console.log('未知错误，注册失败')
                        resolve({
                            res:'系统错误，请重新填写',
                            code:'404'
                        })
                    }
                })
            }

        })
    })
}

router.post('/login',async (ctx) => {
    console.log('前端提交的数据',ctx.request.body)

    const {nickname,password} = ctx.request.body
    await connection.query(user.getUser,[nickname],(err,result) => {
        console.log('后台查找到的数据',result)
        if(result){
            if(password === result){

            }
        }else{
            ctx.body = {
                res:'账号不存在',
                code:'300'
            }
        }
    })
    ctx.body = {
        res:'账号不存在',
        code:'300'
    }
})

router.post('/reg',async (ctx) => {
    console.log('注册信息',ctx.request.body)
    const {nickname,password,tel_num,mail} = ctx.request.body
    // 首先要注册一张表
    await connection.query('select table_name from information_schema.tables where table_schema="account_list"',async (err,res) => {
        if(res){
            console.log('查找到表了',res)
        }else{
            console.log('表名不存在')
            await connection.query(handle_table.createTable,(err,success) => {
                if(success){
                    console.log('表创建成功')
                }else{
                    console.log(err)
                }
            })
        }

    })
    ctx.body = await findNick(nickname,password,tel_num,mail)


})

module.exports = router
