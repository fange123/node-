//* 抽离处理函数

const db = require("../db");
const bcrypt = require("bcryptjs"); //加密
const config = require("../config");
const jwt = require("jsonwebtoken"); //生成token

exports.regUser = (req, res) => {
  const userInfo = req.body;
  // if (!userInfo.username || !userInfo.password) {
  //   // return res.send({ message: "用户名或密码不合法", success: false });
  //   return res.cc("用户名或密码不合法");
  // }

  //* 定义sql语句，判断用户名是否被占用
  const sqlStr = "select * from ev_users where username = ?";
  db.query(sqlStr, userInfo.username, (err, result) => {
    // if (err) return res.send({ message: "查询失败", success: false });
    if (err) return res.cc(err);

    if (result.length > 0) {
      // return res.send({
      //   message: "用户名被占用，请更换用户名",
      //   success: false,
      // });

      return res.cc("用户名被占用，请更换用户名");
    }
    //* 对密码进行加密处理(明文密码，随机盐的长度)
    userInfo.password = bcrypt.hashSync(userInfo.password, 10);

    //* 定义插入新用户的sql语句
    const sqlStr = "insert into ev_users set ?";

    db.query(
      sqlStr,
      { username: userInfo.username, password: userInfo.password },
      (err, result) => {
        // if (err) return res.send({ success: false, message: err.message });
        if (err) return res.cc(err);

        if (result.affectedRows !== 1)
          // return res.send({ success: false, message: "注册失败，清稍后再试" });
          return res.cc("注册失败，清稍后再试");

        // res.send({ message: "注册成功", success: true });
        res.cc("注册成功", true);
      }
    );
  });
};

exports.login = (req, res) => {
  const userInfo = req.body;
  const sqlStr = "select * from ev_users where username = ?";
  //* 查找用户是否存在
  db.query(sqlStr, userInfo.username, (err, result) => {
    if (err) return res.cc(err);
    if (result.length !== 1) return res.cc("用户不存在");

    //* 判断密码是否正确(用户提交的密码，数据库存储的密码)
    const _result = bcrypt.compareSync(userInfo.password, result[0].password);
    if (!_result) return res.cc("密码错误");

    //* 在服务器生成jwt token
    //* 需要除去用户敏感信息password,user_pic等
    const user = { ...result[0], password: "", user_pic: "" };
    //* 对用户的信息加密
    const tokenStr = jwt.sign(user, config.jwtSecretKey, {
      expiresIn: config.expiresIn,
    });

    res.send({ message: "登录成功", success: true, token: tokenStr });
  });
};
