const express = require('express');
const lesson1Controller = require('../controllers/lesson1');
const router = express.Router();
 
router.get('/home', lesson1Controller.homePage);
 
router.get('/profile', lesson1Controller.profilePage);
 
router.get('/login', lesson1Controller.loginPage);
 
router.get('/logout', lesson1Controller.logoutPage);
 


module.exports = router; 