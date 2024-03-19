const express = require('express');
const {
  register,
  login,
  getUserData,
} = require('../controllers/auth-controllers');
const { registerSchema, loginSchema } = require('../validators/auth-validator');
const validate = require('../middlewares/validate-middleware');
const authMiddleware = require('../middlewares/auth-middleware');

const router = express.Router();

router.post('/register', validate(registerSchema), register);

router.post('/login', validate(loginSchema), login);

router.get('/user', authMiddleware, getUserData);

module.exports = router;
