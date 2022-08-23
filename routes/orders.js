/* eslint-disable */
const express = require("express");
const app = express.Router();
const { isLoggedIn } = require("./middleware");
require('dotenv').config()
const stripe = require("stripe")('sk_test_51LZ1KkHgH8V7eWW5re4zadDxBHH5r5sbWkKxtL9qV2tytsNHjniCnddMCjOAq49QKDActxfoq8KrbGBImfoROYYK00HXDxKON1');

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
    const cart = await req.user.getCart()
    const items = cart.lineItems.find( item => item.id === req.body.product.id)
    res.status(204).send( await items.destroy() )
  } catch (ex) {
    next(ex)
  }
})

app.post("/create-payment-intent", async (req, res, next) => {
  const { amount, id} = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "order",
      payment_method: id,
      confirm: true
    })
    console.log(payment)
    res.json({
      message: "Payment Successful",
      success: true
    })
  } 
  catch(error) {
    next(error)
  }
})

app.post("/", isLoggedIn, async (req, res, next) => {
  try {
    res.send(await req.user.createOrderFromCart());
  } catch (ex) {
    next(ex);
  }
});

