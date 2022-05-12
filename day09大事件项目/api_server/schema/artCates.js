const joi = require("joi");

//* 定义文章分类名称和分类别名的验证规则
const name = joi.string().required();
const alias = joi.string().alphanum().required();

// * 校验规则对象

exports.add_cate_schema = {
  body: {
    name,
    alias,
  },
};
