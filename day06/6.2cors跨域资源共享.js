// TODO:接口的跨域问题
//*  1.cors(主流，推荐)

// ? 1.安装cors npm i cors
// ? 2.导入 const cors = require("cors")
// ? 3.在路由之前配置中间件  app.use(cors())

//*  2.jsonp(有缺陷，只支持get请求)
const cors = require("cors");
const express = require("express");
const router = require("./apiRouter");

const app = express();
app.use(cors());

//注册解析表单数据的中间件
app.use(express.urlencoded({ extended: false }));

//注册全局路由
app.use("/api", router);

app.listen(80, () => {
  console.log("http://127.0.0.1");
});

// TODO:cors由一系列的http响应头组成，这些响应头决定了浏览器是否组织前端js代码跨域获取资源

//* 1.Access-Control-Allow-Origin:*   任何网站都可以访问资源
//* 2.Access-Control-Allow-Headers:*   客户端向服务端的请求头
//* 3.Access-Control-Allow-Methods:*   服务端指定客户端可以发起的请求方式  | *
