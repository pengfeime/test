const jwt = require('jsonwebtoken')
const util = require('util')
const verify = util.promisify(jwt.verify) // util.promisify方法用于将传统的函数回调方式转换为promise方式 verify是解密方式
const config = require('./config')                 // (条件1：最后一个参数是函数，条件2:函数的参数形式为(err,result)形式)
module.exports = async function (theToken) {
    if(theToken){
        let Token
        try{
            Token = await verify(theToken,config.secret) // 使用密钥对token进行解码
            console.log('解码成功',Token) // 这里会返回一个promise
        }catch(err) {
            console.log('token解析错误',err)
            return false
        }
        return true
    }else{
        console.log('未传入token')
        return false
    }
}
