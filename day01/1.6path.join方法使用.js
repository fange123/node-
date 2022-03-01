const path = require("path");

//* ../会抵消前面的路径

const newPath = path.join("/a", "/b/c", "../", "./d");
console.log(newPath); //    /a/b/d   c被抵消了

//!: 路径拼接时，尽量使用path.join()方法，不要使用+号拼接

const fs = require("fs");

fs.readFile(path.join(__dirname, "./file/1.txt"), "utf8", function (err, data) {
  if (err) {
    return console.log(err.message);
  }
  console.log(data);
});
