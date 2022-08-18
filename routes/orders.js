const express = require("express");
const app = express.Router();
const { isLoggedIn } = require("./middleware");

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

app.delete('/cart', isLoggedIn, async (req, res, next)=> {
  try{
    const cart = await req.user.getCart()
    const items = cart.lineItems.find( item => item.id === req.body.id)
    await items.destroy()
    res.sendStatus(204)
  } catch (er) {
    next(er)
  }
})