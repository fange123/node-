//* 安装三方中间件 npm install body-parser

//* 导入 解析数据的中间件
const bodyParser = require("body-parser");

const express = require("express");
const app = express();

//* 注册中间件

app.use(bodyParser.urlencoded({ extended: false }));
app.post("/user", (req, res) => {
  console.log(req.body); //默认是undefined
  res.send("OK");
});

app.listen(80, () => {
  console.log("服务启动");
});
