const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  aadharNo: {
    type: Number,
    required: true,
  },
  mobile: {
    type: String,
  },
  addresses: [
    {
      type: String, // Change from ObjectId to String
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('users', userSchema);

module.exports = User;
