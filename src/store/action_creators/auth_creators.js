import { SET_AUTH } from "../actions/auth_actions";

const _logout = () => {
  return {
    type: SET_AUTH,
    auth: {}
  };
};

const _handleToken = (auth) => {
  return {
    type: SET_AUTH,
    auth,
  };
};



export { _logout, _handleToken};


