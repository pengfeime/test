// node入口文件
const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()
const connection = require('./db')
const $sql = require('./sqlMap')
const bodyparser = require('koa-bodyparser')

// 在路由匹配前，解决跨域问题 对于任何请求，将先调用此异步函数
// axios 使用 post 发送数据时，默认是直接把 json 放到请求体中提交到后端的。也就是说，我们的 Content-Type 变成了 application/json;charset=utf-8 ,这是axios默认的请求头content-type类型。但是实际我们后端要求的 'Content-Type': 'application/x-www-form-urlencoded' 为多见，这就与我们不符合。
app.use(async(ctx,next) => {
    ctx.set("Access-Control-Allow-Origin","*")
    await next()
})
// 处理post请求
app.use(bodyparser())
app.use(router.routes())
router.get('/',async (ctx) => {
    console.log('收到请求了')
    ctx.body = 'hello，这是后端返回的数据'
})
router.post('/submit',async (ctx) => {
    console.log('前端提交的数据',ctx.request.body)
    const {reg,login} = $sql.user,
        {name,password} = ctx.request.body
    await connection.query(login,[name,password],(err,result) => {
        console.log('后台查找到的数据',result)
    })
    ctx.body = {
        res:"that's ok",
        code:200
    }
})


app.listen(3000,() => {
    console.log('端口监听成功！')
})
