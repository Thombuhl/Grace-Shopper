/* eslint-disable */
const express = require("express");
const app = express.Router();
const { User } = require("../db");
const { isLoggedIn , isAdminIn} = require("./middleware");

module.exports = app;


app.post("/signup", async (req, res, next) => {
  try {
    const users = await User.findAll({
      where: {
        username: req.body.username,
      },
    });
    if (users.length === 0) {
      await User.create(req.body);
      const credentials = {
        username: req.body.username,
        password: req.body.password,
      };
      res.send({ token: await User.authenticate(credentials)})
    } else {
      const credentials = {
        username: req.body.username,
        password: req.body.password,
      };
      res.send({ token: await User.authenticate(credentials) });
    }
  } catch (er) {
    next(er);
  }
});
app.get("/user ", isAdminIn,  async (req, res, next) => {
  try {
    res.send(await User.findAll())
    
  } catch (error) {
    next(error);
  }
});

app.get("/", isLoggedIn, async (req, res, next) => {
  const userInfo = {
    username: req.user.username,
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    email: req.user.email,
    id: req.user.id,
    profileImage: req.user.profileImage,
    addressStreet: req.user.addressStreet,
    addressCity: req.user.addressCity,
    addressState: req.user.addressState,
    addressZip: req.user.addressZip,
    addressUnit: req.user.addressUnit,
  }
  res.send(userInfo);
});

app.put("/", isLoggedIn, async (req, res, next) => {
  const user = req.user;
  user.update(req.body);
  res.send(user);
});

app.post("/", async (req, res, next) => {
  try {
    const credentials = {
      username: req.body.username,
      password: req.body.password,
    };
    res.send({ token: await User.authenticate(credentials) });
  } catch (ex) {
    next(ex);
  }
});
