// 这里是包的入口文件

const age = require("./src/getAge");
const data = require("./src/getData");

module.exports = {
  ...age,
  ...data,
};
