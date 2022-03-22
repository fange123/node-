const file = require("./3.3module.exports对象");
// console.log(file); //{ name: 'zhy', getName: [Function: getName] }

const file1 = require("./3.4export对象");
// console.log(file1); //{ name: 'ls' }

const file3 = require("./开发自己的包/index");
// console.log(file3.getMyData("张海玉"));

const file4 = require("./开发自己的包/index");
console.log(file4.getMyData("张海宇"));
console.log(file4.getAge(18));
