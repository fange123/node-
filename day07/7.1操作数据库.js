//* 导入mysql模块

const mysql = require("mysql");
//* 建立与数据库的连接
const db = mysql.createPool({
  host: "127.0.0.1", //数据库的ip地址
  user: "root", //登录数据库的用户名
  password: "admin123", //登录数据库的密码
  database: "my_db_01", //要操作的额数据库
});

// 测试mysql模块能否正常工作
// db.query("SELECT 1", (err, result) => {
//   if (err) console.log(err);

//   console.log(result);
// });

// const selectStr = "select * from users";
// db.query(selectStr, (err, result) => {
//   if (err) console.log(err);

//   console.log(result);
// });

//* 向users表插入一条数据
// const userInfo = {
//   username: "zdb",
//   password: "111111",
// };
// const selectString = "insert into users (username, password) values (?,?)";

// db.query(
//   selectString,
//   [userInfo.username, userInfo.password],
//   (err, result) => {
//     if (err) return console.log(err.message);

//     if (result.affectedRows === 1) {
//       console.log("插入成功");
//     }
//   }
// );

//*快捷插入数据

// const userInfo = {
//   username: "xz",
//   password: "ccccccc",
// };

// const selectString = "insert into users set ?";
// db.query(selectString, userInfo, (err, result) => {
//   if (err) return console.log(err.message);

//   if (result.affectedRows === 1) {
//     console.log("插入成功");
//   }
// });

//* 更新表数据
// const user = {
//   id: 3,
//   username: "fange",
//   password: "888888",
// };
// const sqlStr = "update users set username = ?,password = ? where id = ?";
// db.query(sqlStr, [user.username, user.password, user.id], (err, result) => {
//   if (err) return console.error(err);
//   if (result.affectedRows === 1) {
//     console.log("更新成功");
//   }
// });
//* 便捷更新表数据
// const user = {
//   id: 4,
//   username: "fange1",
//   password: "888888",
// };
// const sqlStr = "update users set ? where id = ?";
// db.query(sqlStr, [user, user.id], (err, result) => {
//   if (err) return console.error(err);
//   if (result.affectedRows === 1) {
//     console.log("更新成功");
//   }
// });

//* 删除
// const sqlStr = "delete from users where id = ?";
// db.query(sqlStr, 5, (err, result) => {
//   if (err) return console.error(err);
//   if (result.affectedRows === 1) {
//     console.log("更新成功");
//   }
// });

//* 标记删除，一般直接删除会出现问题，建议使用标记删除 的方法 ，模拟删除动作，
//* 类似在表中加入一个status状态，来标记当前这条数据是否被删除，
//* 看似执行了delete，实际上是update
const sqlStr = "update users set status = ? where id = ?";
db.query(sqlStr, [1, 4], (err, result) => {
  if (err) return console.error(err);
  if (result.affectedRows === 1) {
    console.log("更新成功");
  }
});
