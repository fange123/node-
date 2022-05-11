const db = require("../db/index");

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
