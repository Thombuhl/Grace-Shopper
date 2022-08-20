

const SET_AUTH = "SET_AUTH";
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const UPDATE_PROD_QUANTITY = 'UPDATE_PROD_QUANTITY'

const _logout = () => {
  return {
    type: SET_AUTH,
    auth: {},
  };
};

const _handleToken = (auth) => {
  return {
    type: SET_AUTH,
    auth,
  };
};

const _updateProd = (product) => {
  return {
    type: UPDATE_PROD_QUANTITY,
    product
  }
}


const _deleteProduct = (product) => {
  return {
    type: DELETE_PRODUCT,
    product
  }
}

export { _logout, _handleToken, _deleteProduct, _updateProd };


