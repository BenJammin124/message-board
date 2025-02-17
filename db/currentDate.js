//./db/currentDate.js
const { format } = require("date-fns");

const currentDate = new Date();
const formattedDate = format(currentDate, "PP");

module.exports = formattedDate;
