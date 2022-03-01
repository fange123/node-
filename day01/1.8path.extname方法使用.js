const path = require("path");

const pathStr = "/a/b/c/index.less";
//* 获取路径中的扩展名

const extname = path.extname(pathStr); //.less
console.log(extname);
