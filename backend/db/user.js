const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    maxlength: 1,
    maxlength: 18,
  },
  password: {
    type: String,
    required: true,
  },
  authority: {
    type: String,
    enum: ['guest', 'user', 'admin']
  }
}, {
  timestamps: true
});

module.exports = model('User', userSchema);