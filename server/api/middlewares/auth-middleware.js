const jwt = require('jsonwebtoken');
const User = require('../models/user-model');

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'JWT is missing: Token not given' });
  }

  const modifiedToken = token.replace('Bearer ', '');
  console.log(modifiedToken);

  try {
    const isVerified = jwt.verify(modifiedToken, process.env.SECRET_JWT);
    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });
    req.user = userData;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid Token Provided' });
  }
};

module.exports = authMiddleware;
