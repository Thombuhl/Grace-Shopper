import axios from 'axios';

const SET_CART = 'SET_CART';
const UPDATE_LINEITEM_Q = 'UPDATE_CART';
const DELETE_LINEITEM = 'DELETE_LINEITEM';

const cart = (state = { lineItems: [ ] }, action)=> {
  switch(action.type) {
    case SET_CART: 
      return action.cart;
    case UPDATE_LINEITEM_Q:
      return state.map(lineItem => lineItem.id !== action._lineItem.id ? lineItem : action._lineItem)
    case DELETE_LINEITEM:
      return state.filter(lineItem => lineItem.id !== action.item.id)
    default: 
      return state;
  }


}

export const fetchCart = () => {
  return async(dispatch)=> {
    const response = await axios.get('/api/orders/cart', {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    });
    dispatch({ type: SET_CART, cart: response.data });

  };
};


export const updateLineItemQuantity = (newQuantity) => {
  return async(dispatch) => {
    const response = await axios.put('/api/orders/cart', newQuantity, {
      headers: {
        authorization: window.localStorage.getItem('token')
      }, 
    });
    dispatch({type: UPDATE_LINEITEM_Q, _lineItem: response.data})
  };
};

export const deleteLineItem = (item) => {
  return async(dispatch) => {
     await axios.delete('/api/orders/cart', item,  {
      headers: {
        authorization: window.localStorage.getItem('token')
      },
    });
    dispatch({type: DELETE_LINEITEM, _lineItem: item})

  }
}


export default cart;
