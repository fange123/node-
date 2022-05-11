const express = require("express");

const router = express.Router();

const userInfo_handler = require("../router_handler/userInfo");

const expressJoi = require("@escook/express-joi");
const {
  update_userInfo_schema,
  update_password_schema,
} = require("../schema/user");

router.get("/userInfo", userInfo_handler.getUserInfo);
router.post(
  "/userInfo",
  expressJoi(update_userInfo_schema),
  userInfo_handler.updateUserInfo
);
router.post(
  "/updatePwd",
  expressJoi(update_password_schema),
  userInfo_handler.updatePassword
);

module.exports = router;
