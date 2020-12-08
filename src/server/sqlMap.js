// mysql查询语句封装
let sqlMap = {
    // 用户注册登录相关
    user:{
        reg:'insert into account_list(name,password) values(?,?)', // 增加 注册
        login:'select * from account_list where name=? and password=?', //查询 登录验证
        set:'update account_list set name=?,password=? where name=?', //修改
        delete:'delete from account_list where name=?' //删除
    },
    // 创建新表
    handle_table:{

    }
}
module.exports = sqlMap
