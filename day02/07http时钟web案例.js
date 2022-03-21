const fs = require("fs");
const http = require("http");
const path = require("path");

const server = http.createServer();

server.on("request", (res, req) => {
  const { url } = res;
  // const fPath = path.join(__dirname, url);
  // fs.readFile(fPath, (err, data) => {
  //   if (err) return req.end("404 not found");
  //   req.end(data);
  // });
  let fPath = "";
  // * 优化请求路径
  if (url === "/") {
    fPath = path.join(__dirname, "./clock/index.html");
  } else {
    fPath = path.join(__dirname, "./clock", url);
  }
  fs.readFile(fPath, (err, data) => {
    if (err) return req.end("404 not found");
    req.end(data);
  });
});

server.listen(89, () => {
  console.log("server is running at http://127.0.0.1");
});
