import axios from "axios";
import {_deleteProduct, _updateProd} from "./action_creators";


const SET_CART = 'SET_CART';
const UPDATE_PROD_QUANTITY = 'UPDATE_PROD_QUANTITY';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

const cart = (state = { lineItems: [ ] }, action)=> {
  switch(action.type) {
    case SET_CART: 
      return action.cart;
    case DELETE_PRODUCT: 
      return state.lineItems = state.lineItems.filter(item => item.id !== action.product.id)
    case UPDATE_PROD_QUANTITY:
      return state.lineItens.map(lineItem => lineItem.id !== action._lineItem.id ? lineItem : action._lineItem)

    default: 
      return state
  };
};

export const fetchCart = () => {
  return async(dispatch)=> {
    const response = await axios.get('/api/orders/cart', {
      headers: {
        authorization: window.localStorage.getItem("token"),
      },
    });
    dispatch({ type: SET_CART, cart: response.data });
  };
};


export const updateLineItemQuantity = (product) => {
  const token = window.localStorage.getItem('token')
  
  return async(dispatch) => {

    const response = await axios.put('/api/orders/cart', product,{
      headers: {
        authorization: token
      }, 
    });
    dispatch(_updateProd(response.data))
  };
};

export const deleteLineItem = (product) => {
  const token = window.localStorage.getItem('token');
  
  return async(dispatch) => {

   await axios.delete('/api/orders/cart', {
      headers: {
        authorization: token
      },
      data: {
        product
      }
    });
    dispatch(_deleteProduct(product))
  };
};

export default cart;
