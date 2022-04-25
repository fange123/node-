const express = require("express");

const router = express.Router();

//todo:get接口
router.get("/get", (req, res) => {
  //* query是客户端传给服务端的查询参数
  const query = req.query;
  res.send({
    status: 200,
    message: "get成功！",
    data: query, //响应的数据
  });
});

//todo:post接口
router.post("/post", (req, res) => {
  //* post请求数据在body里面，如果要拿到body，必须配置解析数据的中间件
  const body = req.body;
  res.send({
    status: 200,
    message: "post成功！",
    data: body, //响应的数据
  });
});

module.exports = router;
