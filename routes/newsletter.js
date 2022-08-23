/* eslint-disable */
const express = require("express");
const app = express.Router();
const { User } = require("../db");

module.exports = app;

app.put("/", async (req, res, next) => {
  try {
    let user = await User.findOne({
      where: {
        email: req.body.email,
      }
    })
    if(!user) {
      res.send(await User.create({ email:req.body.email, newsLetter:true }))
    }
    res.send(await user.update({ newsLetter:true }))
  } catch (ex) {
    next(ex);
  }
});
