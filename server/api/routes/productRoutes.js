const express = require('express');

const router = express.Router();

// Getting all the products
router.get('/', getProducts);

module.exports = router;
