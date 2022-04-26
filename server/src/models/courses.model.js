const mongoose = require('mongoose');

const coursesSchema = new mongoose.Schema({
  ID: {
    type: String,
    required: true,
    unique: true
  },
  Name: {
    type: String,
    required: true,
  },
  Code: {
    type: String,
    required: true,
  },
  Professor: {
    type: String,
  },
  Year: {
    type: Number,
    required: true,
  },
  Description: {
    type: String,
  },
  Dependencies: [ String ],
  Department: {
    type: String,
    required: true,
  },
  Open: {
    type: Boolean,
    required: true,
    default: true,
  },
});

module.exports = mongoose.model('Courses', coursesSchema);