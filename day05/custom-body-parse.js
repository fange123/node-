//* 导入node内置的querystring模块
const qs = require("querystring");

const bodyParser = (req, res, next) => {
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
};

module.exports = bodyParser;
