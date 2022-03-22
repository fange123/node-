//* 由于module.export写起来不方便，所以node官方又提供了export
//* 如果module.export和export指向同一个对象，还是以module.export对象为准

// console.log(exports === module.exports); //true

module.exports.age = 18;
exports.name = "zs";
exports.say = function () {
  console.log("hh");
};
//? 上面的挂载方式不管是使用module.exports还是export都一样，混搭也可以
//? 但是如果使用了下面对象的形式，那最后显示的是对象的内容

module.exports = {
  name: "ls",
};
