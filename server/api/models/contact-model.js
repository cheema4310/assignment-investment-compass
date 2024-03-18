const mongoose = require('mongoose');

const conatctSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  message: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Contact', conatctSchema);
