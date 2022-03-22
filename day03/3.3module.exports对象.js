module.exports.sayHello = function () {
  console.log("hello");
};
module.exports.age = 18;

const name = "zhy";
const getName = () => {
  console.log(name);
};

module.exports = {
  name,
  getName,
};

//* require导入时，永远以module.exports【对象】为准,,所以，这个文件最后导出的内容是name,getName
