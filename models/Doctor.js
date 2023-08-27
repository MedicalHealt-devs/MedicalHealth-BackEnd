const mongoose = require('mongoose');
const { Schema } = mongoose;

const doctorSchema = new Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
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
  role: {
    type: String,
    enum: ['Dentist', 'General_Doctor', 'Podiatrist'],
    default: 'doctor',
    required: true
  },
  biography: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
