/* eslint-disable */
const { User } = require("../db");

const isLoggedIn = async (req, res, next) => {
  try {
    req.user = await User.findByToken(req.headers.authorization);
    next();
  } catch (ex) {
    next(ex);
  }
};
const isAdminIn = (req , res ,next)=>{
  if(req.user.isAdmin === false){
    return next('access denied', 401)
  }
next()
}
module.exports = {
  isLoggedIn, isAdminIn
};
