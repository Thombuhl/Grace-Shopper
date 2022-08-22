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
        newsLetter:false
      }
    })
    if(!user) {
      res.send(await User.create({ ...req.body, email:req.body.email}))
    }
    await user.update(req.body)
    res.send(await user.save())
  } catch (ex) {
    next(ex);
  }
});
