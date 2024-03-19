const express = require('express');
const validate = require('../middlewares/validate-middleware');
const { createContactMsg } = require('../controllers/contact-controllers');
const { contactSchema } = require('../validators/contact-validator');

const router = express.Router();

router.post('/', validate(contactSchema), createContactMsg);

module.exports = router;
