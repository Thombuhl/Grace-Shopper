const express = require('express');
const app = express.Router();
const { Product} = require('../db');
module.exports = app;

app.use('/routes', express.static(path.join(__dirname, "./routes")))


app.post("/api/products", async (req, res) => {
  const newProduct = new Product(req.body);
  const savedProduct = await newProduct.save();
  res.send(savedProduct);

})

app.get('/api/products/womens', async (req, res, next) => {
  try {
    res.send(await Product.findWomensProduct())
      
  } catch (error) {
    next(error)
  }
})

app.get('/api/products/mens', async (req, res, next) => {
  try {
    res.send(await Product.findMensProduct())
      
  } catch (error) {
    next(error)
  }
})