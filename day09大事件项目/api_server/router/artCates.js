const express = require("express");

const router = express.Router();

const expressJoi = require("@escook/express-joi");
const { add_cate_schema } = require("../schema/artCates");

const artCate_handler = require("../router_handler/artCate");

router.get("/cates", artCate_handler.getArticleCates);

router.post(
  "/addCates",
  expressJoi(add_cate_schema),
  artCate_handler.addArticleCates
);

module.exports = router;
