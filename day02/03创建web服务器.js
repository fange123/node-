// * 1.导入http模块
const http = require("http");
// * 2.创建web服务器实例
const server = http.createServer();
// * 3.为服务器绑定request事件，监听客户端请求  使用.on方法
server.on("request", (req, res) => {
  // 主要有客户端访问服务器，就会出发request事件，从而调用这个事件处理函数
  console.log("有人访问我们的服务器啦");
});
// * 4.启动服务器  .listen(端口号，cb回调函数)

server.listen(80, () => {
  console.log("服务启动起来了127.0.0.1");
});
