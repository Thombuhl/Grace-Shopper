import axios from "axios";
import {_deleteProduct, _updateProd, _setCart, updateQuantity} from "./action_creators/cart_creators";
import { DELETE_PRODUCT, SET_CART, UPDATE_QUANTITY } from "./actions/cart_actions";


const initialState = {
  lineItems: []
};


const cart = (state = initialState, action)=> {
  switch(action.type) {
    case SET_CART: 
      return action.cart
    case DELETE_PRODUCT:
     const lineItems = state.lineItems.filter(lineItem => lineItem.id !== action.lineItem.id)
      return {...state, lineItems}
    case UPDATE_QUANTITY:
      console.log(action)
    default: 
      return state
  };
};

export const fetchCart = () => {
  const token = window.localStorage.getItem("token");
  return async(dispatch)=> {
    const response = await axios.get('/api/orders/cart', {
      headers: {
        authorization: token
      },
    });
    dispatch(_setCart(response.data));
  };
};





export const addToCart = (product, diff)=> {
  return async(dispatch, getState)=> {
    const lineItem = getState().cart.lineItems.find(lineItem => lineItem.productId === product.id) || { quantity: 0};
    const response = await axios.put('/api/orders/cart', { product, quantity: lineItem.quantity + diff}, {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    });
    dispatch({ type: 'SET_CART', cart: response.data });
  };
};



export const deleteLineItem = (lineItem) => {
  return async(dispatch) => {
   await axios.delete('/api/orders/cart', {

      headers: {
        authorization: window.localStorage.getItem('token')
      },
      data: {
        lineItem
      }
    });

    dispatch(_deleteProduct(lineItem))
  };
};

export default cart;
