// *  fs.writeFile(file, data[ ,options] ,callback)

//参数1:file必选 表示文件存放路径
//参数2:data必选 表示要写入的内容
//参数3:options可选 表示什么格式写入内容，默认"utf-8"
//参数4:callback必选 写入完成后的回调函数

const fs = require("fs");
fs.writeFile("./file/2.txt", "hello 呀", function (err) {
  if (err) {
    console.log("文件写入失败" + err);
    return;
  }
  console.log("文件写入成功");
});
