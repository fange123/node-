const express = require("express");

//? 1.调用express.Router()函数创建路由对象
const router = express.Router();

//? 2.向路由对象上挂载具体的路由
router.get("/user/list", (req, res) => {
  res.send("get userList");
});

router.post("/user/add", (req, res) => {
  res.send("add success ");
});

//? 3.使用module.exports向外共享路由对象
module.exports = router;
