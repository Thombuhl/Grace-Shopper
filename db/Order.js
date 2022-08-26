/* eslint-disable */
const conn = require("./conn");
const { Sequelize } = conn;

const Order = conn.define("order", {
  isCart: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  isFavorite: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  delivered: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  confirmationId: {
    type: Sequelize.UUID,
  },
  shippingAddress: {
    type: Sequelize.STRING
  },
  orderTotal: {
    type: Sequelize.FLOAT
  }
});

module.exports = Order;
