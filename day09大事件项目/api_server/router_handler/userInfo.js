const db = require("../db/index");

const bcrypt = require("bcryptjs");

exports.getUserInfo = (req, res) => {
  const sqlStr =
    "select id,username,nickname,email,user_pic from ev_users where id=?";

  db.query(sqlStr, req.user.id, (err, result) => {
    if (err) return res.cc(err);
    if (result.length !== 1) return res.cc("获取用户信息失败");

    res.send({
      message: "获取成功",
      success: true,
      data: result[0],
    });
  });
};
exports.updateUserInfo = (req, res) => {
  const sqlStr = "update ev_users set ? where id = ?";
  db.query(sqlStr, [req.body, req.body.id], (err, result) => {
    if (err) return res.cc(err);
    if (result.affectedRows !== 1) return res.cc("更新失败");
    res.cc("更新成功", true);
  });
};
exports.updatePassword = (req, res) => {
  //* 根据id查询用户信息

  const sqlStr = "select * from ev_users where id = ?";
  db.query(sqlStr, req.user.id, (err, result) => {
    if (err) return res.cc(err);
    if (result.length !== 1) return res.cc("用户不存在");
    //* 判断用户旧密码是否正确

    const compareBcrypt = bcrypt.compareSync(
      req.body.oldPwd,
      result[0].password
    );
    if (!compareBcrypt) return res.cc("旧密码输入不正确");

    //* 对新密码加密后，更新到表里
    const newPwd = bcrypt.hashSync(req.body.newPwd, 10);
    const sqlStr = "update ev_users set password = ? where id = ?";
    db.query(sqlStr, [newPwd, req.user.id], (err, result) => {
      if (err) return res.cc(err);
      if (result.affectedRows !== 1) return res.cc("密码重置失败");
      res.cc("重置密码成功", true);
    });
  });
};

exports.updateAvatar = (req, res) => {
  //* 定义更新图片的sql语句
  const sqlStr = "update ev_users set user_pic = ? where id = ?";
  db.query(sqlStr, [req.body.avatar, req.user.id], (err, result) => {
    if (err) return res.cc(err);
    if (result.affectedRows !== 1) return res.cc("头像更新失败");

    res.cc("头像更新成功", true);
  });
};
