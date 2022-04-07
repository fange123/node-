const express = require("express");
const app = express();

//* 中间件处理函数和路由处理函数不同的是，中间件处理函数有三个参数：req，res,next

//* next函数的作用
// 实现多个中间件之间连续调用，把流转关系转交给下一个中间件或者路由

//* 定义一个最简单的中间件函数

const mw = function (req, res, next) {
  console.log("最简单的中间件函数");
  //必须调用next
  next();
};

//! 将mw注册为全局生效中间件:任何请求都能用
app.use(mw);

app.get("/api/users", (req, res) => {
  console.log("aaaa");
  res.send("get users");
});

app.listen(88, () => {
  console.log("http:127.0.01:88");
});
