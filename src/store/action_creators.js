/* eslint-disable */
const SET_AUTH = "SET_AUTH";

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

export { _logout, _handleToken };
