const express = require('express');
const validate = require('../middlewares/validate-middleware');
const { conatctSchema } = require('../validators/auth-validator');
const { createContactMsg } = require('../controllers/contact-controllers');

const router = express.Router();

router.post('/', validate(conatctSchema), createContactMsg);

module.exports = router;
