const express = require("express");
const app = express();
//* 导入node内置的querystring模块
const qs = require("querystring");

//* 解析表单的自定义中间件
app.use((req, res, next) => {
  //* 定义一个str，接收客户端发送过来的数据
  let str = "";
  //* 监听data事件   chunk可能是数据的一部分，因为有时候数据太大，分多次发送
  req.on("data", (chunk) => {
    str += chunk;
  });

  //* 监听end事件
  req.on("end", () => {
    //todo 把字符串的内容解析成对象
    console.log(str); //name=zs&age=18&gender=%E7%94%B7
    const body = qs.parse(str);
    req.body = body;
    next();
  });
});

app.post("/user", (req, res) => {
  res.send(req.body);
});

app.listen(80, () => {
  console.log("服务器来了");
});
