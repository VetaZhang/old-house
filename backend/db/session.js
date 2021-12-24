const mongoose = require('mongoose');
const { Schema, ObjectId, model } = mongoose;

const sessionSchema = new Schema({
  userId: ObjectId,
  
}, {
  timestamps: true
});

module.exports = model('Session', sessionSchema);