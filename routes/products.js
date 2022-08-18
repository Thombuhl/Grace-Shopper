const express = require("express");
const app = express.Router();
const { Product } = require("../db");

module.exports = app;

app.get("/", async (req, res, next) => {
  try {
    res.send(await Product.findAll());
  } catch (error) {
    next(error);
  }
});

app.get("/:id", async (req, res, next) => {
  try {
    res.send(
      await Product.findAll({
        where: {
          id: req.params.id,
        },
      })
    );
  } catch (error) {
    next(error);
  }
});

app.post("/", async (req, res) => {
  const newProduct = new Product(req.body);
  const savedProduct = await newProduct.save();
  res.send(savedProduct);
});

app.get("/womens", async (req, res, next) => {
  try {
    res.send(await Product.findWomensProduct());
  } catch (error) {
    next(error);
  }
});

app.get("/mens", async (req, res, next) => {
  try {
    res.send(await Product.findAll({
      where:{
        gender:"MENS"
      }
    }));
  } catch (error) {
    next(error);
  }
});
