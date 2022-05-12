const express = require("express");

const router = express.Router();

const artCate_handler = require("../router_handler/artCate");

router.get("/cates", artCate_handler.getArticleCates);

module.exports = router;
