const mysql = require('mysql')
const dbconfig = {
    host:'localhost',
    user:'root',
    password:'root',
    database:'test',
    port:'3306'
}
const connection = mysql.createConnection({
    host:dbconfig.host,
    user:dbconfig.user,
    password:dbconfig.password,
    database:dbconfig.database,
    port:dbconfig.port,
    multipleStatements:true  // 支持多语句查询
})
connection.connect((err) => {
    if(err){
        console.log(err)
        return
    }
    console.log('mysql数据库连接成功')


})
module.exports = connection

