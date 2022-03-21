const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
  // req是请求对象，包含了与客户端的数据和属性
  const { url, method } = req;
  //url是客户端的请求地址
  //method是客户端的请求方式
  const str = `您请求的地址是 ${url}，请求方法是${method}`;
  console.log(str);
  //res.end方法，向客户端发送指定内容，并且结束此次请求的处理过程

  //* 为了防止中文显示乱码的问题，需要设置响应头，Content-Type 的值为 text/html; charset=utf-8
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  res.end(str);
});

server.listen(88, () => {
  console.log("服务起来了，在127.0.0.1:88");
});
