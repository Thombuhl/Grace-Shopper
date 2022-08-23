import { DELETE_PRODUCT, SET_CART, UPDATE_QUANTITY, ADD_PRODUCT_TO_CART } from "../actions/cart_actions"

const _setCart = (data) => {
  return {
    type: SET_CART,
    cart: data
  };
};

const _updateProd = (product) => {
  return {
    type: UPDATE_PROD_QUANTITY,
    product
  };
};

const _deleteProduct = (lineItem) => {
  return {
    type: DELETE_PRODUCT,
    lineItem
  };
};

const updateQuantity = (quantity) => {
  return {
    type: UPDATE_QUANTITY,
    quantity
  }
}

const addProduct = (product) => {
  console.log(product)
  return {
    type: ADD_PRODUCT_TO_CART,
    product
  }
}

export {
  _deleteProduct,
  _updateProd,
  _setCart,
  updateQuantity,
  addProduct
}