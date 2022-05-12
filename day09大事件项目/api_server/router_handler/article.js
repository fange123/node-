const path = require("path");
const db = require("../db");

exports.addArticle = (req, res) => {
  // 手动判断是否上传了文章封面
  if (!req.file || req.file.fieldname !== "cover_img")
    return res.cc("文章封面是必选 参数！");

  const articleInfo = {
    // 标题、内容、状态、所属的分类Id ...req.body,
    // 文章封面在服务器端的存放路径
    cover_img: path.join("/uploads", req.file.filename),
    // 文章发布时间
    pub_date: new Date(),
    // 文章作者的Id
    author_id: req.user.id,
  };

  const sqlStr = `insert into ev_articles set ?`;
  db.query(sqlStr, articleInfo, (err, result) => {
    if (err) return res.cc(err);
    if (result.affectedRows !== 1) return res.cc("发布文章失败");
    res.cc("发布成功", true);
  });
};
