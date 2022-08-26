import axios from 'axios';
import {
  _deleteProduct,
  _updateProd,
  _setCart,
  addProduct,
} from './action_creators/cart_creators';
import {
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT,
  SET_CART,
  UPDATE_QUANTITY,
} from './actions/cart_actions';

let initialState = {
  lineItems: [],
};


const cart = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      console.log(action.cart)
      console.log(localStorage)
      return action.cart;
    case DELETE_PRODUCT:
      const lineItems = state.lineItems.filter(
        (lineItem) => lineItem.id !== action.lineItem.id
      );
      return { ...state, lineItems };
    case ADD_PRODUCT_TO_CART:
      let newProducts = action.lineItems;
      return { ...state, newProducts };

    default:
      return state;
  }
};

export const fetchCart = () => {
  let token = window.localStorage.getItem('token');
  console.log('fetching cart, here is a users localstorage.token ', token)
  if( !token ){
    window.localStorage.setItem('token', 'guest')
    window.localStorage.setItem('cart', JSON.stringify({ lineItems: []}))
    const cart = window.localStorage.getItem('cart')
    const token = window.localStorage.getItem('token')
    console.log('---', token, cart.lineItems)
  }
  else if( token === 'guest' ){
    const cart = window.localStorage.getItem('cart')
    const token = window.localStorage.getItem('token')
    console.log('+++++++++', token, cart)
  }
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
  return async (dispatch) => {
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
    const token = window.localStorage.getItem('token')
    const lineItem = getState().cart.lineItems.find(
      (lineItem) => lineItem.productId === product.id
    ) || { quantity: 0 };
    if(token === 'guest'){
      let cart = JSON.parse(window.localStorage.getItem('cart'))
      cart.lineItems.push({ product })
      window.localStorage.setItem('cart', JSON.stringify(cart))
      console.log(cart)
      // cart.lineItem.push(product)
    }
    else {
      const response = await axios.put(
        '/api/orders/cart',
        {
          product,
          quantity: lineItem.quantity + 1,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      dispatch(addProduct(response.data));
    }
  };
};

export default cart;
