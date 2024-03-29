const User = require('../models/user-model');
const bcrypt = require('bcrypt');

const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userAlreadyExist = await User.findOne({ email: email });
    if (userAlreadyExist) {
      return res
        .status(400)
        .json({ message: { email: 'User Already Exists in DB' } });
    }

    const userCreated = await User.create({
      name,
      email,
      password,
    });

    res.status(201).json({
      message: { success: 'Created User in Database' },
      token: await userCreated.generateToken(),
      id: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const hasUser = await User.findOne({ email });
    if (!hasUser) {
      return res.status(400).json({
        message: {
          email: 'No User registered with this Email',
        },
      });
    }

    const isPasswordValid = await bcrypt.compare(password, hasUser.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        message: {
          password: 'Authentication Error: Password Invalid',
        },
      });
    }

    res.status(200).json({
      message: 'user found and authenticated',
      token: await hasUser.generateToken(),
      id: hasUser._id.toString(),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserData = async (req, res) => {
  const userData = req.user;
  try {
    res.json({ message: userData });
  } catch (error) {}
};
module.exports = { register, login, getUserData };
