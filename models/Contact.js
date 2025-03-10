const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'must provide first name'],
    trim: true,
    maxlength: [20, 'first name can not be more than 20 characters'],
  },
  lastName: {
    type: String,
    required: [true, 'must provide last name'],
    trim: true,
    maxlength: [20, 'last name can not be more than 20 characters'],
  },
  email: {
    type: String,
    required: [true, 'must provide email'],
    trim: true,
  },
  favoriteColor: {
    type: String,
    default: 'blue',
    required: [true, 'must provide favorite color'],
  },
  birthday: {
    type: Date,
    required: [true, 'must provide birthday']
  }
});

module.exports = mongoose.model('Contact', ContactSchema);