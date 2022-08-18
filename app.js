const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use('/dist', express.static('dist'));
app.use('/public', express.static(path.join(__dirname, './public')));

// Routes
app.use('/api/orders', require('./routes/orders'));
app.use('/api/sessions', require('./routes/sessions'));
app.use('/api/products', require('./routes/products'));

// Root Route
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

// Error Route
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send({ error: err });
});

module.exports = app;
