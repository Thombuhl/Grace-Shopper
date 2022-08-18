import axios from 'axios';

const initialState = {
  products: [],
};
const GET_PRODUCTS = 'GET_PRODUCTS';

const products = (state = initialState, action) => {
  if (action.type === GET_PRODUCTS) {
    return action.products;
  }
  return state;
};

export default products;
