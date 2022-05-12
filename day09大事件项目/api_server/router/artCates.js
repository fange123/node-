const express = require("express");

const router = express.Router();

const expressJoi = require("@escook/express-joi");
const { add_cate_schema, delete_cate_schema } = require("../schema/artCates");

const artCate_handler = require("../router_handler/artCate");

router.get("/cates", artCate_handler.getArticleCates);
router.get(
  "/deleteCate/:id",
  expressJoi(delete_cate_schema),
  artCate_handler.deleteCateById
);

router.post(
  "/addCates",
  expressJoi(add_cate_schema),
  artCate_handler.addArticleCates
);

module.exports = router;
