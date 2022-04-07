const express = require("express");
const app = express();

//* express中，路由是客户端的请求和服务器的函数之间的映射关系
//* express中，路由由三部分组成：请求的类型,请求的url,处理函数

//? 比如

app.get("/", function (req, res) {});
app.post("/", function (req, res) {});
