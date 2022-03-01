//* path.basename()方法可以从路径中获取文件名
//* 参数1:路径
//* 参数2:文件扩展名
const path = require("path");
const pathStr = "/a/b/c/d/index.html";

const name = path.basename(pathStr); //index.html
console.log(name);
const nameOnly = path.basename(pathStr, ".html"); //index
console.log(nameOnly);
