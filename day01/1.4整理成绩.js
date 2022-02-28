const fs = require("fs");

fs.readFile("./file/成绩.txt", "utf8", function (err, dataStr) {
  if (err) {
    return console.log("读取文件失败！" + err.message);
  }

  const dataArr = dataStr.split(" ");
  const newArr = dataArr.map((item) => item.replace("=", ":"));
  const lastStr = newArr.join("\n"); //对字符串拼接并且换行
  // 处理完数据然后写入到新的文件中
  fs.writeFile("./file/成绩-ok.txt", lastStr, function (err) {
    if (err) {
      return console.log("文件写入失败！" + err.message);
    }

    console.log("文件写入成功！！");
  });
});
