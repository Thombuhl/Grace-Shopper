const conn = require('./conn');
const { Sequelize } = conn;

const Order = conn.define('order', {
  isCart: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  delivered: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  confirmationId: {
    type: Sequelize.UUID
  }
});

module.exports = Order;
