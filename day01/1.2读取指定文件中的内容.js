//*  fs.readFile(path[ ,options],callback)

// 参数1:必选，字符串，表示文件路径
// 参数2:可选，表示以什么编码格式读取文件
// 参数3:必选，文件读取完后回调函数拿取到结果

const fs = require("fs");
fs.readFile("./file/1.txt", "utf8", function (err, dataStr) {
  // console.log(err); //失败内容: null或者失败对象
  // console.log("-----------");
  // console.log(dataStr); //成功内容

  // console.log("++++++++++");
  if (err) {
    console.error("文件读取失败" + err.message);
    return;
  }
  console.log("文件读取成功" + dataStr);
});
