const express = require('express');
const lesson1Controller = require('../controllers');
const router = express.Router();
 
router.get('/home', lesson1Controller.homePage);
 
router.get('/profile', lesson1Controller.profilePage);
 
router.get('/login', lesson1Controller.loginPage);
 
router.get('/logout', lesson1Controller.logoutPage);

router.get('/contacts', lesson1Controller.contacts);
 


module.exports = router; 