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

//* 定义删除id的验证规则
const id = joi.number().integer().min(1).required();
exports.delete_cate_schema = {
  params: {
    id,
  },
};

//* 根据id查详细信息的id规则
exports.get_cate_schema = {
  params: {
    id,
  },
};

//* 更新文章分类验证规则
exports.update_cate_schema = {
  body: {
    id,
    name,
    alias,
  },
};
