//* 导入验证规则的包
const joi = require("joi");

//* 定义用户名和密码的验证规则
const username = joi.string().alphanum().min(1).max(10).required();
const password = joi
  .string()
  .pattern(/^[\S]{6,12}$/)
  .required();

//* 定义验证登录和注册表单数据的验证对象

exports.reg_login_schema = {
  body: { username, password },
};
