const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'must provide first name']    
  },
  lastName: {
    type: String,
    required: [true, 'must provide last name']
    
  },
  email: {
    type: String,
    required: [true, 'must provide email']
  },
  favoriteColor: {
    type: String,
    default: 'blue',
    required: [true, 'must provide favorite color'],
  },
  birthday: {
    type: String,
    required: [true, 'must provide birthday']
  }
});

module.exports = mongoose.model('Contact', ContactSchema);