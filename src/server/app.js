// node入口文件
const Koa = require('koa')
const app = new Koa()
const router = require('./router')
const cors = require('koa-cors')
const bodyparser = require('koa-bodyparser')


app.use(cors())
// 在路由匹配前，解决跨域问题 对于任何请求，将先调用此异步函数
// axios 使用 post 发送数据时，默认是直接把 json 放到请求体中提交到后端的。也就是说，我们的 Content-Type 变成了 application/json;charset=utf-8 ,这是axios默认的请求头content-type类型。但是实际我们后端要求的 'Content-Type': 'application/x-www-form-urlencoded' 为多见，这就与我们不符合。

// 处理post请求
app.use(bodyparser())
app.use(router.routes())
    .use(router.allowedMethods())


app.listen(3000,() => {
    console.log('端口监听成功！')
})
