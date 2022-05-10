const express = require("express");
const cors = require("cors");

const app = express();
const joi = require("joi");

//* 配置cors跨域 将cors注册为全局中间件
app.use(cors());

//* 配置解析表单的中间件,只能解析x-www数据格式
app.use(express.urlencoded({ extended: false }));

//* 一定要在路由之前封装res.cc函数
app.use(function (req, res, next) {
  //success默认值是false，默认处理失败
  //err可能是错误对象也可能是传入的失败字符串
  res.cc = function (err, success = false) {
    res.send({
      success,
      message: err instanceof Error ? err.message : err,
    });
  };
  next();
});

const userRouter = require("./router/user");
app.use("/api", userRouter);

//* 定义错误级别中间件
app.use((error, req, res, next) => {
  //* 验证失败错误
  if (error instanceof joi.ValidationError) return res.cc(error);
  //未知错误
  res.cc(error);
});

app.listen(3007, () => {
  console.log("listening on http://127.0.0.1:3007");
});
