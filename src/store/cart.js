import axios from "axios";
import {
  _deleteProduct, 
  _updateProd, 
  _setCart, 
  addProduct, 
  _applyDiscount
} from "./action_creators/cart_creators";
import { 
  ADD_PRODUCT_TO_CART, 
  APPLY_DISCOUNT, 
  DELETE_PRODUCT, 
  SET_CART, 
  UPDATE_QUANTITY 
} from "./actions/cart_actions";

const initialState = {
  lineItems: [],
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      return action.cart;
    case DELETE_PRODUCT:
      const lineItems = state.lineItems.filter(
        (lineItem) => lineItem.id !== action.lineItem.id
      );
      return { ...state, lineItems };
    case ADD_PRODUCT_TO_CART:
     let newProducts = action.lineItems;
     return {...state, newProducts}
    case APPLY_DISCOUNT:
      return {...state, discountAmount:action.code}
    default: 
      return state
  };

};

export const fetchCart = () => {
  const token = window.localStorage.getItem('token');
  return async (dispatch) => {
    const response = await axios.get('/api/orders/cart', {
      headers: {
        authorization: token,
      },
    });
    dispatch(_setCart(response.data));
  };
};

export const updateCart = (product, diff) => {
  return async (dispatch, getState) => {
    const lineItem = getState().cart.lineItems.find(
      (lineItem) => lineItem.productId === product.id
    ) || { quantity: 0 };
    const response = await axios.put(
      '/api/orders/cart',
      { product, quantity: lineItem.quantity + diff },
      {
        headers: {
          authorization: window.localStorage.getItem('token'),
        },
      }
    );
    dispatch({ type: 'SET_CART', cart: response.data });
  };
};

export const deleteLineItem = (lineItem) => {
  return async(dispatch) => {

    await axios.delete('/api/orders/cart', {
      headers: {
        authorization: window.localStorage.getItem('token'),
      },
      data: {
        lineItem,
      },
    });
    dispatch(_deleteProduct(lineItem));
  };
};

export const addToCart = (product) => {
  return async (dispatch, getState) => {
    const lineItem = getState().cart.lineItems.find(
      (lineItem) => lineItem.productId === product.id
    ) || { quantity: 0 };
    const response = await axios.put(
      '/api/orders/cart',
      {
        product,
        quantity: lineItem.quantity + 1,
      },
      {
        headers: {
          authorization: window.localStorage.getItem('token'),
        },
      }
    );
    dispatch(addProduct(response.data));
  };
};

export const applyDiscount = (code) => {
  return async (dispatch) => {
    const discountCodes = (await axios.get(`/api/discounts`)).data
    const discount = discountCodes.find( discount => discount.code === code ).discountAmount
    dispatch(_applyDiscount(discount))
  };
};

export default cart;
