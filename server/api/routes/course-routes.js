const express = require('express');
const { getCourses } = require('../controllers/product-controllers');

const router = express.Router();

// Getting all the courses
router.get('/', getCourses);

module.exports = router;
