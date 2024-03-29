const express = require('express');
const cors = require('cors');
const { connect } = require('./db/config');

const courseRoutes = require('./api/routes/course-routes');
const authRoutes = require('./api/routes/auth-routes');
const contactRoutes = require('./api/routes/contact-routes');

//delete later
// const Course = require('./api/models/course-model');
// const dummyCourses = require('./dummyCourses');

//Configuring .env Variables stored
require('dotenv').config();

// Connection to MongoDB
connect();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS
app.use(cors());

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/courses', courseRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);

// handle Error across application
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// Create Error Middleware for it later
// app.use((error, req, res, next) => {
//   res.status(error.status || 500);
//   res.json({
//     message: error.message,
//   });
// });

// delete later only to add courses to database
// const addCoursesToDB = async () => {
//   try {
//     await Course.deleteMany({});
//     await Course.insertMany(dummyCourses);
//   } catch (error) {
//     console.error('Error adding dummy products:', error);
//   }
// };
// addCoursesToDB();

app.listen(PORT, () => console.log('server is running on Port: ' + PORT));
