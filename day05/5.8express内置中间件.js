//* express.static
//* express.json
//? app.use(express.json())

//* express.urlencoded

//? app.use(express.urlencoded({extended:false}))

const express = require("express");
const app = express();

//+ 配置解析参数格式是json的中间件
app.use(express.json());

//+配置解析参数是urlencoded格式的中间件
app.use(express.urlencoded({ extended: false }));

app.post("/user", (req, res) => {
  //todo 在服务器可以通过req.body来接收客户端的请求数据
  //todo 默认情况下，如果不配置解析表单的中间件，则req.body默认是undefined
  console.log(req.body); //undefined
  res.send("哈哈哈哈");
});

app.post("/book", (req, res) => {
  console.log(req.body);
  res.send("ok");
});

app.listen(80, () => {
  console.log("服务起来了");
});
