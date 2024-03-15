const mongoose = require('mongoose');

const courseSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    desc: {
      type: String,
      required: true,
    },

    detailDesc: {
      type: String,
      required: true,
    },

    overview: {
      type: String,
    },

    modules: {
      type: [String],
    },

    imageUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Course', courseSchema);
