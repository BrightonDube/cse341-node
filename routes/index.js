const express = require('express');
const router = express.Router();
const lesson1Controller = require('../controllers');
const contactsRoutes = require('./contacts');

 
router.get('/home', lesson1Controller.homePage);
 
router.get('/profile', lesson1Controller.profilePage);
 
router.get('/login', lesson1Controller.loginPage);
 
router.get('/logout', lesson1Controller.logoutPage);

router.use('/contacts', contactsRoutes);


module.exports = router; 