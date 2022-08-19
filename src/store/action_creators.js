

const SET_AUTH = "SET_AUTH";
const DELETE_PRODUCT = 'DELETE_PRODUCT';

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


const _deleteProduct = (product) => {
  return {
    type: DELETE_PRODUCT,
    product
  }
}

export { _logout, _handleToken, _deleteProduct };


