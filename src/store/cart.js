import axios from "axios";
import {_deleteProduct, _updateProd, _setCart} from "./action_creators/cart_creators";
import { UPDATE_PROD_QUANTITY, DELETE_PRODUCT, SET_CART } from "./actions/cart_actions";





const cart = (state = { lineItems: [] }, action)=> {
  switch(action.type) {
    case SET_CART: 
      return action.cart
    case DELETE_PRODUCT: 
    state.lineItems = state.lineItems.filter(item => item.id !== action.product.id)
      return state
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



// export const updateLineItemQuantity = (product) => {
//   const token = window.localStorage.getItem('token')
  
//   return async(dispatch) => {

//     const response = await axios.put('/api/orders/cart', product,{
//       headers: {
//         authorization: token
//       }, 
//     });
//     dispatch(_updateProd(response.data))
//   };
// };


// export const updateLineItemQuantity = (product, quantity) => {
//   const token = window.localStorage.getItem('token')
  
//   return async(dispatch) => {

//     const response = await axios.put('/api/orders/cart', product,{
//       headers: {
//         authorization: token
//       }, 
//     });
//     dispatch(_updateProd(response.data))
//   };
// };


export const deleteLineItem = (product) => {
  const token = window.localStorage.getItem('token');
  return async(dispatch) => {
  // const lineItem = getState().cart.lineItems.find(lineItem => lineItem.productId === product.id) || { quantity: 0};
   await axios.delete('/api/orders/cart', 
   {
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
