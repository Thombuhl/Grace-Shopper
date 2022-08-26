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
  profileImage: {
    type: Sequelize.TEXT,
    defaultValue: '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'
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
  newsLetter:{
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  addressStreet: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  addressCity: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  addressState: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  addressZip: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  addressUnit: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
});

User.addHook('beforeSave', async (user) => {
  if (user._changed.has('password')) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  // else if (user._changed.has('profileImage')) {

  // }
});

User.prototype.createOrderFromCart = async function () {
  const cart = await this.getCart();
  const uuid = v4();
  cart.isCart = false;
  cart.confirmationId = uuid;
  return cart.save();
};

User.prototype.createOrderFromFavorite = async function () {
  const favorite = await this.getFavorite();
  const uuid = v4();
  favorite.isCart = false;
  favorite.confirmationId = uuid;
  return favorite.save();
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
