//* 出现路径拼接错误的问题，是因为提供了 ./ 或 ../ 开头的相对路径,会执行node命令时所处的目录
//* 如果要解决这个问题，可以直接提供一个完整的文件存放路径就行(绝对路径)  __dirname
const fs = require("fs");

//?  __dirname 表示当前文件所处的目录  就是1.51.5路径问题.js这个文件的位置

fs.readFile(__dirname + "/file/1.txt", "utf8", function (err, dataStr) {
  if (err) {
    return console.error(err);
  }

  console.log(dataStr);
});
