import { UPDATE_PROD_QUANTITY, DELETE_PRODUCT, SET_CART } from "../actions/cart_actions"

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

export {
  _deleteProduct,
  _updateProd,
  _setCart
}