const express = require("express");
const router = require("./apiRouter");

const app = express();

//注册解析表单数据的中间件
app.use(express.urlencoded({ extended: false }));

//注册全局路由
app.use("/api", router);

app.listen(80, () => {
  console.log("http://127.0.0.1");
});
