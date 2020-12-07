// mysql查询语句封装
let sqlMap = {
    // 用户注册登录相关
    user:{
        reg:'insert into account_list(name,password) values(?,?)',
        login:'select * from account_list where name=? and password=?'
    }
}
module.exports = sqlMap
