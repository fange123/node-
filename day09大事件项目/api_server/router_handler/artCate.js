const db = require("../db");

exports.getArticleCates = (req, res) => {
  //* 查询没有被删除 的文章数据  id从小到大排序
  const sqlStr =
    "select * from ev_article_cate where is_delete = 0 order by id asc";

  db.query(sqlStr, req.body.id, (err, result) => {
    if (err) return res.cc(err);

    res.send({
      message: "查询成功",
      success: true,
      data: result,
    });
  });
};
