/* eslint-disable */
const express = require("express");
const app = express.Router();
const { isLoggedIn } = require("./middleware");

module.exports = app;

app.put("/cart", isLoggedIn, async (req, res, next) => {
  try {
    res.send(await req.user.addToCart(req.body));
  } catch (ex) {
    next(ex);
  }
});

app.get("/cart", isLoggedIn, async (req, res, next) => {
  try {
    res.send(await req.user.getCart());
  } catch (ex) {
    next(ex);
  }
});

app.post('/favorite', isLoggedIn, async(req, res, next)=> {
  try{
    res.send(await req.user.createOrderFromFavorite())
  } catch (ex) {
    next(ex)
  }
})

app.put("/favorite", isLoggedIn, async (req, res, next) => {
  try {
    res.send(await req.user.addToFavorite(req.body));
  } catch (ex) {
    next(ex);
  }
});

app.get("/favorite", isLoggedIn, async (req, res, next) => {
  try {
    res.send(await req.user.getFavorite());
  } catch (ex) {
    next(ex);
  }
});

app.delete('/favorite', isLoggedIn, async (req, res, next) => {
  try{
    const favorite = await req.user.getFavorite()
    const items = favorite.lineItems.find( item => item.productId === req.body.product.id)
    res.status(204).send( await items.destroy() )
  } catch (ex) {
    next(ex)
  }
})

app.get('/purchases', isLoggedIn, async (req, res, next) => {
  try {
    res.send(await req.user.getPreviousOrders());
  } catch (ex) {
    next(ex)
  }
})

app.delete('/cart', isLoggedIn, async (req, res, next) => {
  try{
    res.send(req.body)
    const cart = await req.user.getCart()
    const items = cart.lineItems.find( item => item.id === req.body.product.id)
    res.status(204).send( await items.destroy() )
  } catch (ex) {
    next(ex)
  }
})

app.post("/", isLoggedIn, async (req, res, next) => {
  try {
    res.send(await req.user.createOrderFromCart());
  } catch (ex) {
    next(ex);
  }
});