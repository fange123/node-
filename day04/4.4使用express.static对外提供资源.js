const express = require("express");
const path = require("path");

const app = express();

//* 可以提供多个文件夹,先来后到，第一个文件夹没找到，找后一个
app.use(express.static(path.join(__dirname, "./files")));
app.use(express.static(path.join(__dirname, "./clock")));

//! 如果希望有文件夹前缀，可以用下面的写法，前缀可以随便命名，一般情况下，前缀和目录一样
app.use("/files", express.static(path.join(__dirname, "./files")));
app.use("/public", express.static(path.join(__dirname, "./clock")));

//http://127.0.0.1:90/files/index.html

app.listen(90, () => {
  console.log("服务起来了，在http://127.0.0.1:90");
});
