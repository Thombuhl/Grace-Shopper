const express = require('express');
const app = express.Router();
const { User } = require('../db');
const { isLoggedIn } = require('./middleware');

module.exports = app;

app.post('/', async(req, res, next)=> {
  try {
    const credentials = {
      username: req.body.username, 
      password: req.body.password
    }
    res.send({ token: await User.authenticate(credentials)});
  }
  catch(ex){
    next(ex);
  }
});

app.post('/signup', async(req,res,next)=> {
  try {
    const users = await User.findAll({
      where: {
        username:req.body.username
      }
    })
    if(users.length === 0){
      res.send(await User.create(req.body))
    }
    else{
      const credentials = {
        username: req.body.username, 
        password: req.body.password
      }
      res.send({ token: await User.authenticate(credentials)})
    }
  }
  catch(er){
    next(er)
  }
})

app.get('/', isLoggedIn, async(req, res, next)=> {
  res.send(req.user);
});

app.put('/', isLoggedIn, async(req,res,next)=> {
  const user = req.user
  user.update(req.body)
  res.send(user)
})