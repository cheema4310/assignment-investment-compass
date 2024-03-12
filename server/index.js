const express = require('express');
const cors = require('cors');
const { connect } = require('./db/config');

const productsRoute = require('./api/routes/productRoutes');
const orderRoute = require('./api/routes/orderRoutes');

//Configuring .env Variables stored
require('dotenv').config();

// Connection to MongoDB
connect();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS
app.use(cors());

// Routes
app.use('/products', productsRoute);
app.use('/order', orderRoute);

// handle Error across application
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: error.message,
  });
});

app.listen(PORT, () => console.log('server is running on Port = ' + PORT));
