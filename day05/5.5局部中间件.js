const express = require("express");

const app = express();

//* 不使用app.use定义的中间件，叫局部中间件

const mw = function (req, res, next) {
  console.log("我是局部中间件");
  next();
};

//todo 有中间件
app.get("/", mw, (req, res) => {
  res.send("get success");
});

//todo 没有中间件
app.get("/user", (req, res) => {
  res.send("get user success");
});

//! 多个中间件

app.get("/user", mw1, mw2, (req, res) => {
  res.send("get user success");
});
//或者数组的方法
app.get("/user", [mw1, mw2], (req, res) => {
  res.send("get user success");
});

app.listen(80, () => {
  console.log("服务起来了");
});
