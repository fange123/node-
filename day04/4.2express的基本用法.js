// * 安装
// npm install express@4.17.1

//? 1.导入
const express = require("express");
//? 2.创建web服务器
const app = express();
//? 3.启动web服务器

//? 4.监听客户端的get和post请求，并响应内容

//? 监听get请求
//* 参数一：客户端请求的url
//* 参数二：请求对应的处理函数
app.get("/user", (req, res) => {
  //send方法响应给客户端内容
  res.send({ name: "zhy", age: 18 });
});

//? 监听post请求
//* 参数一：客户端请求的url
//* 参数二：请求对应的处理函数
app.post("/user", (req, res) => {
  res.send("请求成功");
});

app.get("/", (req, res) => {
  //+ 通过req.query方法获取客户端的查询参数
  //+ 默认是一个空对象
  // const {} = req.query;
  console.log(req.query);
  res.send(req.query);
});

//* :id是一个动态匹配到的参数,参数名字可以自己取，可以有多个参数
app.get("/user/:id/:name", (req, res) => {
  //+ 通过req.params,可以访问到req中的动态参数，通过：匹配到的
  //+ 默认是一个空对象
  console.log(req.params);
  res.send(req.params);
});

app.listen(88, () => {
  console.log("服务起来了，在http://127.0.0.1:88");
});
