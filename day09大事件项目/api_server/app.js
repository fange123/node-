const express = require("express");
const cors = require("cors");

const app = express();

//* 配置cors跨域 将cors注册为全局中间件
app.use(cors());

//* 配置解析表单的中间件,只能解析x-www数据格式
app.use(express.urlencoded({ extended: false }));

const userRouter = require("./router/user");
app.use("/api", userRouter);

app.listen(3007, () => {
  console.log("listening on http://127.0.0.1:3007");
});
