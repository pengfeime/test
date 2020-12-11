// mysql查询语句封装
let sqlMap = {
    // 用户注册登录相关
    user:{
        addUser:'insert into account_list(nickname,password,tel_num,mail) values(?,?,?,?)', // 增加 注册
        getUser:'select * from account_list where nickname=?', //查询 登录验证
        set:'update account_list set name=?,password=? where name=?', //修改
        delete:'delete from account_list where name=?' //删除
    },
    // 创建新表
    handle_table:{
        // createTable:'create table ?(id int(5) auto_increment=1,nickname varchar(8) ,password varchar(12),phone int(11),mail,avatar mediumblob)', // 新建表
        createTable:'create table account_list(nickname varchar(8),password varchar(12),tel_num varchar(11),mail varchar(20))'
    }
}
module.exports = sqlMap
