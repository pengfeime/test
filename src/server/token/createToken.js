const jwt = require('jsonwebtoken') // 服务认证生成一个json对象
const config = require('./config')

module.exports = function (nickname) {
    console.log('hello,token')
    let token = jwt.sign(
        {nickname}, // 载荷，编码后储存在token中的数据
        config.secret, // 密钥，自己定义的，需要相同密钥才能解码
        {
            expiresIn:'100s'
        } // 设置token过期时间
    )
    console.log('成功生成token',token)
    return token
}
