//* 多个中间件共享同一份req和res
//* 所以在上游的中间件中，可以为req或者res添加方法或者属性，达到共享的效果
const express = require("express");

const app = express();

app.use(function (req, res, next) {
  req.startTime = Date.now();
  next();
});
//! 定义多个全局中间件
app.use(function (req, res, next) {
  req.name = "haha";
  next();
});
app.use(function (req, res, next) {
  req.age = 18;
  next();
});

app.get("/", (req, res) => {
  res.send("1---" + req.startTime + "-----" + req.name);
});
app.get("/user", (req, res) => {
  res.send("2---" + req.startTime + "-----" + req.age);
});

app.listen(80, () => {
  console.log("服务启动");
});
