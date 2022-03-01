// * 读取file下的index.html文件，把它拆分成html，css,script,然后分别存在file文件下的clock中

const path = require("path");
const fs = require("fs");

//读取成功后，利用正则表达式匹配<style></style> <script></script>
//\s 空白 \S 非空白 * 0个或多个
const styleReg = /<style>[\s\S]*<\/style>/;
const scriptReg = /<script>[\s\S]*<\/script>/;

fs.readFile(
  path.join(__dirname, "./file/index.html"),
  "utf8",
  function (err, data) {
    if (err) return console.log("文件读取失败" + err.message);

    resolveCSS(data);
    resolveJS(data);
    resolveHTML(data);
  }
);

function resolveCSS(html) {
  //exec时正则方法，匹配字符串，结果是数组第一项
  const c1 = styleReg.exec(html)[0];
  //去掉style标签
  const newCss = c1.replace("<style>", "").replace("</style>", "");
  //处理完，写入file下的clock文件中
  fs.writeFile(
    path.join(__dirname, "./file/clock/index.css"),
    newCss,
    function (err) {
      if (err) return console.log("文件写入失败" + err.log);
      console.log("写入css样式成功");
    }
  );
}

function resolveJS(html) {
  //exec时正则方法，匹配字符串，结果是数组第一项
  const j1 = scriptReg.exec(html)[0];
  //去掉style标签
  const newJs = j1.replace("<script>", "").replace("</script>", "");
  //处理完，写入file下的clock文件中
  fs.writeFile(
    path.join(__dirname, "./file/clock/index.js"),
    newJs,
    function (err) {
      if (err) return console.log("文件写入失败" + err.log);
      console.log("写入js文件成功");
    }
  );
}

function resolveHTML(html) {
  //把内敛的js和css替换成外部链接
  const newHtml = html
    .replace(styleReg, '<link href="./index.css" rel="stylesheet" /></link>')
    .replace(scriptReg, '<script src="./index.js"></script>');
  //处理完，写入file下的clock文件中
  fs.writeFile(
    path.join(__dirname, "./file/clock/index.html"),
    newHtml,
    function (err) {
      if (err) return console.log("文件写入失败" + err.log);
      console.log("写入html文件成功");
    }
  );
}
