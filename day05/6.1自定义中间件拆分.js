const express = require("express");
const app = express();
const customBodyParser = require("./custom-body-parse");
//* 解析表单的自定义中间件
app.use(customBodyParser);

app.post("/user", (req, res) => {
  res.send(req.body);
});

app.listen(80, () => {
  console.log("服务器来了");
});
