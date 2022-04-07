const express = require("express");
const app = express();

app.get("/", (req, res) => {
  throw new Error("报错了哈哈");
  res.send("hhhh");
});

//! 错误级别的中间件，必须注册在所有路由之后!!!!
//全局注册一个错误级别的中间件
app.use((err, req, res, next) => {
  console.log("发生了错误", err.message);
  res.send("你好，发生了错误");
});

app.listen(80, () => {
  console.log("服务启动了");
});
