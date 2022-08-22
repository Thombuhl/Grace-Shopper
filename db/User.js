/* eslint-disable */
const conn = require('./conn');
const { Sequelize } = conn;
const { v4 } = require('uuid');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = conn.define('user', {
  username: {
    type: Sequelize.STRING,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
  },
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
    },
  },
});

User.addHook('beforeSave', async (user) => {
  if (user._changed.has('password')) {
    user.password = await bcrypt.hash(user.password, 10);
  }
});

User.prototype.createOrderFromCart = async function () {
  const cart = await this.getCart();
  const uuid = v4();
  cart.isCart = false;
  cart.confirmationId = uuid;
  return cart.save();
};


User.prototype.getFavorite = async function () {
  let order = await conn.models.order.findOne({
    where: {
      userId: this.id,
      isFavorite: true,
      isCart: false
    },
    include: [
      {
        model: conn.models.lineItem,
        include: [conn.models.product],
      },
    ],
  });
  if (!order) {
    order = await conn.models.order.create({ userId: this.id, isFavorite:true, isCart:false });
    order = await conn.models.order.findByPk(order.id, {
      include: [conn.models.lineItem],
    });
  }
  return order;
};

User.prototype.addToFavorite = async function ({ product, quantity }) {
  quantity=1
  const favorites = await this.getFavorite();
  const lineItem = await conn.models.lineItem.findOne({
    where: {
      productId: product.id,
      orderId: favorites.id,
    },
  });
  if (lineItem) {
    favorites.quantity = quantity;
    if (lineItem.quantity) {
      await lineItem.save();
    } else {
      await lineItem.destroy();
    }
  } else {
    await conn.models.lineItem.create({
      productId: product.id,
      quantity,
      orderId: favorites.id,
    });
  }
  return this.getFavorite();
};


User.prototype.addToCart = async function ({ product, quantity }) {
  const cart = await this.getCart();
  const lineItem = await conn.models.lineItem.findOne({
    where: {
      productId: product.id,
      orderId: cart.id,
    },
  });
  if (lineItem) {
    lineItem.quantity = quantity;
    if (lineItem.quantity) {
      await lineItem.save();
    } else {
      await lineItem.destroy();
    }
  } else {
    await conn.models.lineItem.create({
      productId: product.id,
      quantity,
      orderId: cart.id,
    });
  }
  return this.getCart();
};

User.prototype.getCart = async function () {
  let order = await conn.models.order.findOne({
    where: {
      userId: this.id,
      isCart: true,
    },
    include: [
      {
        model: conn.models.lineItem,
        include: [conn.models.product],
      },
    ],
  });
  if (!order) {
    order = await conn.models.order.create({ userId: this.id });
    order = await conn.models.order.findByPk(order.id, {
      include: [conn.models.lineItem],
    });
  }
  return order;
};

User.prototype.getPreviousOrders = async function () {
  const order = await conn.models.order.findOne({
    where: {
      userId: this.id,
      isCart: false,
    },
    include: [
      {
        model: conn.models.lineItem,
        include: [conn.models.product],
      },
    ],
  });
  return order;
};

User.authenticate = async function (credentials) {
  const user = await this.findOne({
    where: {
      username: credentials.username,
    },
  });
  if (user && (await bcrypt.compare(credentials.password, user.password))) {
    return jwt.sign({ id: user.id }, process.env.JWT);
  }
  const error = new Error('Bad Credentials');
  error.status = 401;
  throw error;
};

User.findByToken = async function findByToken(token) {
  try {
    const { id } = jwt.verify(token, process.env.JWT);
    const user = await User.findByPk(id);
    if (!user) {
      throw 'error';
    }
    return user;
  } catch (ex) {
    const error = new Error('bad token');
    error.status = 401;
    throw error;
  }
};

module.exports = User;
