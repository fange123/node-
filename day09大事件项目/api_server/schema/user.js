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

//* 定义 id nickname 和 email的验证规则

const id = joi.number().integer().min(1).required();
const nickname = joi.string().required();
const email = joi.string().email().required();
exports.update_userInfo_schema = {
  //# 对req.body里面的属性进行验证
  body: {
    id,
    nickname,
    email,
  },
};

//* 更新密码的验证对象
exports.update_password_schema = {
  body: {
    oldPwd: password,
    //新旧密码不能一样
    newPwd: joi.not(joi.ref("oldPwd")).concat(password),
  },
};

//* 定义base64格式的图片的验证规则

const avatar = joi.string().dataUri().required();
exports.update_avatar_schema = {
  body: {
    avatar,
  },
};
