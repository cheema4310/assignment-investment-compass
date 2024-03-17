const User = require('../models/user-model');

const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userAlreadyExist = await User.findOne({ email: email });
    if (userAlreadyExist) {
      res.status(401).json({ message: 'User Already Exists in DB' });
    }

    const userCreated = await User.create({
      username: name,
      email,
      password,
    });

    res.status(200).json({
      message: 'Created User in Database',
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
    const emailFound = await User.findOne({ email });
    if (!emailFound) {
      res.status(401).json({ message: 'No User registered with this Email' });
    }
  } catch (error) {}
};

module.exports = { register, login };
