const express = require("express");

const router = express.Router();

const userInfo_handler = require("../router_handler/userInfo");

const expressJoi = require("@escook/express-joi");
const {
  update_userInfo_schema,
  update_password_schema,
  update_avatar_schema,
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
router.post(
  "/update/avatar",
  expressJoi(update_avatar_schema),
  userInfo_handler.updateAvatar
);

module.exports = router;
