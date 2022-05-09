//* 安装express-session
const express = require("express");
const path = require("path");
const session = require("express-session");

const app = express();

//* 配置session
app.use(
  session({
    secret: "bjyx", //随机字符串，
    resave: true, //
    saveUninitialized: true,
  })
);

//* 托管静态资源
app.use(express.static(path.join(__dirname, "./public")));

//* post 请求 解析参数配置
app.use(express.urlencoded({ extended: false }));

app.post("/login", (req, res) => {
  if (req.body.username !== "admin" && req.body.password !== "123456") {
    return res.send({
      success: false,
      message: "登录失败",
    });
  }

  //* 登录成功的话，把信息存入session中
  req.session.userInfo = req.body;
  req.session.isLogin = true;

  res.send({
    success: true,
    message: "登录成功",
  });
});

app.get("/username", (req, res) => {
  //判断用户是否登录
  if (!req.session.isLogin) {
    return res.send({
      success: false,
      message: "fail",
    });
  }
  res.send({
    success: true,
    message: "success",
    username: req.session.userInfo.username,
  });
});

//* 清空session
app.post("/logout", (req, res) => {
  req.session.destroy();
  res.send({
    success: true,
    message: "退出成功",
  });
});

app.listen(80, () => {
  console.log("服务起来了http://127.0.0.1/");
});
