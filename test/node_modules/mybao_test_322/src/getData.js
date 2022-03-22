const moment = require("moment");
const getMyData = (name) => {
  return `hello${name},现在是北京时间${moment().format(
    "YYYY-MM-DD HH:mm:ss"
  )}！`;
};

module.exports = {
  getMyData,
};
