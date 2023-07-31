const moment = require("moment");

const now = moment();

console.log(now.format(), now.get("minute"), now.get("minute") % 10);
