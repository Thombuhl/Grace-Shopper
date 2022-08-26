/* eslint-disable */
const conn = require("./conn");
const { Sequelize } = conn;

const Discount = conn.define("discount", {
  code: {
    type: Sequelize.STRING,
  },
  discountAmount: {
    type: Sequelize.FLOAT,
  },
});

module.exports = Discount;
