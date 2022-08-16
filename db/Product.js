const { FLOAT, STRING, TEXT, ENUM } = require('sequelize/lib/data-types');
const conn = require('./conn');
const { Sequelize } = conn;

const Product = conn.define('product', {
  name: {
    type: Sequelize.STRING
  },
  brand:{
    type:STRING
  },
  size:{
    type:FLOAT,
    validate:{
      min:1,
      max:15
    },
  },
  price:{
    type: FLOAT,
    defaultValue: 0.0
  },
  imageLocation:{
    type: STRING,
  },
  colorway:{
    type: STRING,
  },
  description:{
    type:TEXT
  },
  gender:{
    type: ENUM('Mens', 'Womens', 'Unisex'),
    defaultValue:'Unisex'
  },
  isFemale:{
    type: Sequelize.VIRTUAL,
    get:function(){
      return this.productType==='Womens'
    }
  },
  isMale :{
    type:Sequelize.VIRTUAL,
    get: function(){
      return this.productType==='Mens'
    }
  }
});

Product.findMensProduct = function(){
  return this.findAll({
    where:{
      productType:'Mens',
    }
  })
}

Product.findWomensProduct = function(){
  return this.findAll({
    where:{
      productType:'Womens',
    }
  })
}

module.exports = Product;


