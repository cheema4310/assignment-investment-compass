const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) {
    next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(user.password, salt);
    user.password = hashPassword;
  } catch (error) {
    next(error);
  }
});

userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        id: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.SECRET_JWT,
      { expiresIn: '10d' }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = mongoose.model('User', userSchema);
