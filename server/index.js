const express = require('express');
const cors = require('cors');
const { connect } = require('./db/config');

const productsRoute = require('./api/routes/productRoutes');
const orderRoute = require('./api/routes/orderRoutes');

//delete later
const Course = require('./api/models/course-model');
const { dummyCourses } = require('./dummyCourses');

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
// delete later only to add courses to database
const addCoursesToDB = async () => {
  try {
    await Course.deleteMany({});
    await Course.insertMany(dummyCourses);
  } catch (error) {
    console.error('Error adding dummy products:', error);
  }
};
addCoursesToDB();

app.listen(PORT, () => console.log('server is running on Port = ' + PORT));
