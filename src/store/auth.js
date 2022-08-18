import axios from "axios";
import { _logout, _handleToken } from "./action_creators";

const SET_AUTH = "SET_AUTH";

const auth = (state = {}, action) => {
  switch (action.type) {
    case SET_AUTH:
      return action.auth;
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

    let response = await axios.post('/api/sessions', credentials)
  
    const {token} = response.data;

    window.localStorage.setItem('token', token); 

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
   console.log(token)
  };
};
export default auth;
