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

exports.addArticleCates = (req, res) => {
  //* 定义查询语句分类名称或者分类别名是否被占用
  const sqlStr = "select * from ev_article_cate where name = ? or alias = ?";
  db.query(sqlStr, [req.body.name, req.body.alias], (err, result) => {
    if (err) return res.cc(err);
    //* 1.两个都占用了并且不在同一行
    if (result.length === 2) return res.cc("名称和别名均被占用");

    //* 2.两个都占用了并且在同一行
    if (
      result.length === 1 &&
      result[0].name === req.body.name &&
      result[0].alias === req.body.alias
    )
      return res.cc("名称和别名均被占用");

    //* 3.名称被占用
    if (result.length === 1 && result[0].name === req.body.name)
      return res.cc("名称被占用");

    //* 4.别名被占用
    if (result.length === 1 && result[0].alias === req.body.alias)
      return res.cc("别名被占用");

    // * 往表里插入数据的语句
    const sqlStr = "insert into ev_article_cate set ?";
    db.query(sqlStr, req.body, (err, result) => {
      if (err) return res.cc(err);
      if (result.affectedRows !== 1) return res.cc("文章分类添加失败");
      res.cc("文章分类添加成功", true);
    });
  });
};
