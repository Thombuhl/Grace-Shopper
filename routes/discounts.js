/* eslint-disable */
const express = require("express");
const app = express.Router();
const { Discount } = require("../db");

module.exports = app;

app.get("/", async (req, res, next) => {
  try {
    res.send(await Discount.findAll())
    // res.send(await Discount.findAll({
    //   where: {
    //     code : req.body.discountCode
    //   }
    // }));
  } catch (error) {
    next(error);
  }
});