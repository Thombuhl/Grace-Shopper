/* eslint-disable */
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors")

app.use(express.json());
app.use("/dist", express.static("dist"));
app.use("/public", express.static(path.join(__dirname, "./public")));
app.use(cors())

// Routes
app.use("/api/orders", require("./routes/orders"));
app.use("/api/sessions", require("./routes/sessions"));
app.use("/api/products", require("./routes/products"));
app.use("/api/newsletter", require("./routes/newsletter"));
app.use("/api/discounts", require("./routes/discounts"));

// Root Route
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

// Error Route
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send({ error: err });
});

module.exports = app;
