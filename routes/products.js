const express = require("express");
const app = express.Router();
const { Product } = require("../db");

module.exports = app;

app.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct);
  } catch (ex) {
    next(ex)
  }
});

app.get("/mens", async (req, res, next) => {
  try {
    res.send(await Product.findMensProduct());
  } catch (error) {
    next(error);
  }
});

app.get("/womens", async (req, res, next) => {
  try {
    res.send(await Product.findWomensProduct());
  } catch (error) {
    next(error);
  }
});

app.get("/colorways", async (req, res, next) => {
  try {
    res.send(await Product.findAll({
      where: {
        silhoutte: req.body.silhoutte
      }
    }))
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

app.get("/", async (req, res, next) => {
  try {
    res.send(await Product.findAll());
  } catch (error) {
    next(error);
  }
});