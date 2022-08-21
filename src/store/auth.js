/* eslint-disable */
import axios from "axios";
import { _logout, _handleToken, _removeGuest} from "./action_creators/auth_creators";
import { SET_AUTH} from "./actions/auth_actions";
const NEW_CUSTOMER = 'NEW_CUSTOMER'

const auth = (state = {}, action) => {
  switch (action.type) {
    case SET_AUTH:
      return action.auth;
    case NEW_CUSTOMER:
      state.newCustomer = action.bool
      return state
    default:
      return state;
  }
};

export const logout = () => {
  return (dispatch) => {
    window.localStorage.removeItem("token");
    dispatch(_logout());
  };
};

export const exchangeToken = () => {
  return async (dispatch) => {
    const token = window.localStorage.getItem("token");
    if (token) {
      const response = await axios.get("/api/sessions", {
        headers: {
          authorization: token,
        },
      });
      const auth = response.data;
      dispatch(_handleToken(auth));
    }
  };
};

export const login = (credentials, history) => {
  return async (dispatch) => {
    const response = await axios.post('/api/sessions', credentials)
    const {token} = response.data;
    
    window.localStorage.setItem('token', token)

    window.localStorage.removeItem('guestToken')
    
    const auth = (await axios.get('/api/sessions', {
      headers: {
        authorization: token
      }
    })).data
    dispatch(_handleToken(auth));
    history.push('/')
  
  };
};

export const signup = (userInfo) => {
  return async () => {
   const response =  await axios.post("/api/sessions/signup", userInfo);
   const {token} = response.data
  };
};

export const anonymousUser = (auth) => {
  return async (dispatch) => {
    if(!auth.id) {
      const response = await axios.get("/api/sessions/guest"); {
        const guestToken = response.data;
        window.localStorage.setItem('guestToken', guestToken)
      }
      dispatch({type: NEW_CUSTOMER, bool: true})
    } else {
      window.localStorage.removeItem("guestToken");

    }
  }
}



export default auth
