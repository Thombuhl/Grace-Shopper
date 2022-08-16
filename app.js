const express = require("express");
const app = express()
const { User, Product } = require("./db");
const path = require("path");

app.use(express.json());
app.use("/dist", express.static("dist"));
app.use("/public", express.static(path.join(__dirname, "./public")));
app.use("/api/orders", require("./routes/orders"));
app.use("/api/sessions", require("./routes/sessions"));
app.use("/api/products", require("./routes/products"));

//ROOT
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send({ error: err });
});

module.exports = app;
