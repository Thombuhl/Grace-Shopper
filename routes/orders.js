/* eslint-disable */
const express = require("express");
const app = express.Router();
const { isLoggedIn } = require("./middleware");
const { Product } = require("../db");
module.exports = app;

app.post("/", isLoggedIn, async (req, res, next) => {
  try {
    res.send(await req.user.createOrderFromCart());
  } catch (ex) {
    next(ex);
  }
});

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
    const items = cart.lineItems.find( item => item.id === req.body.lineItem.id)
    res.status(204).send( await items.destroy() )
  } catch (ex) {
    next(ex)
  }
})
app.post("/create-payment-intent", async (req, res) => {
  const { Product } = req.body;
console.log(Product)
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(Product.price),
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
      description: Product.description,
      payment_method: id,
      
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});
