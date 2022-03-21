const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
  //默认内容
  let content = "<h2>404 not found</h2>";
  const { url } = req;

  if (url === "/about.html") {
    content = "<h2>关于</h2>";
  }
  if (url === "index.html" || url === "/") {
    content = "<h2>首页</h2>";
  }
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  res.end(content);
});
server.listen(89, () => {
  console.log("服务起来了");
});
