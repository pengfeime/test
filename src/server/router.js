// 管理访问路由
const Router = require('koa-router')
const router = new Router()

const connection = require('./db')
const $sql = require('./sqlMap')
const {user, handle_table} = $sql
const createToken = require('../server/token/createToken')
const checkToken = require('../server/token/checkToken')


// 创建表
function createTable(){
    return new Promise((res,rej) => {
        connection.query(handle_table.createTable, (err, success) => {
            console.log('开始创建表')
            if (success) {
                console.log('表创建成功')
                res({
                    msg:'表创建成功'
                })
            } else {
                rej(err)
            }
        })
    })
}
// 注册用户
function addNick(nickname, password, tel_num, mail) {
    return new Promise((res, rej) => {
        connection.query(user.addUser, [nickname, password, tel_num, mail], (err, success) => {
            console.log('开始注册了')
            if (success) {
                console.log('后台注册成功')
                res({
                    msg: '注册成功',
                    code: '200'
                })
            } else {
                rej(err)
            }
        })
    })

}

// 查找注册名
function findNick(nickname) {
    return new Promise((resolve, reject) => {
        connection.query(user.getUser, [nickname], async (err, result) => {
            if (err) {
                reject(err)
                console.log('哎呀出错啦')
            } else {
                console.log('后台查找到的数据', result)
                resolve({
                    result
                })
            }
        })
    })
}

// 核对token
router.get('/checktoken',async(ctx) => {
    if(ctx.request.query.Token == 'undefined'){
        ctx.body = {
            ReturnCode: 'FAIL',
            ReturnMsg:'token失效',
            TokenInvalid: false
        }

    }else{
        let istoken = await checkToken(ctx.request.query.Token);
        ctx.body = {
            ReturnCode: istoken ? "SUCCESS" : 'FAIL',
            ReturnMsg: istoken ? '操作成功' : 'token失效',
            TokenInvalid: istoken
        }
    }


})
router.post('/login', async (ctx) => {
    console.log('前端提交的数据', ctx.request.body)
    const {nickname, password} = ctx.request.body
    await findNick(nickname)
        .then((res) => {
            console.log(nickname)
            if (res.result.length) {
                console.log('有数据')
                if (password === res.result[0].password) {
                    ctx.body = {
                        res: '登录成功',
                        code: '200',
                        Token:createToken('nickname')
                    }
                }else{
                    ctx.body = {
                        res: '密码错误',
                        code: '400'
                    }
                }
            }else{
                ctx.body = {
                    res: '账号不存在',
                    code: '300'
                }
            }

        })
        .catch((err) => {
            console.log(err)
        })
})

router.post('/reg', async (ctx) => {
    console.log('注册信息', ctx.request.body)
    const {nickname, password, tel_num, mail} = ctx.request.body
    // 首先要注册一张表
    await connection.query('select table_name from information_schema.tables where table_schema="test" and table_name = "account_list";', async(err, res) => {
        if (res.length) {
            console.log('查找到表了', res)
        } else {
            console.log('表名不存在')
            await createTable()
        }

    })
    ctx.body = await findNick(nickname)
        .then(async (res) => {
            console.log('107行输出',res)
            // 用户名已被使用
            if (res.result.length) {
                console.log('用户名已被注册，请重新注册')
                return {
                    code: '303',
                    msg: '用户名已被注册，请重新注册'
                }
            } else {
                return await addNick(nickname, password, tel_num, mail)
            }
        })



})

module.exports = router
