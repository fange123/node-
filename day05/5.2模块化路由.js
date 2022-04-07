// * 为了方便对路由进行模块化管理，express不建议把路由直接挂载app上
//egg: app.get('/',()=>{})
// * 推荐将路由拆分成单独的模块
//* 步骤

const express = require("express");

const app = express();

//? 1.创建路由模块对应的js文件
//? 2.调用express.Router()函数创建路由对象
//? 3.向路由对象上挂载具体的路由
//? 4.使用module.exports向外共享路由对象
//? 5.使用app.user()函数注册路由模块
const router = require("./router");
app.use(router);
//! app.user()这个方法就是用来注册全局中间件的

//todo: 访问路由可以添加前缀
app.use("/api", router);

app.listen(88, () => {
  console.log("服务起来了，在http://127.0.0.1:88");
});
