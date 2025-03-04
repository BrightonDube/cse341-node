const express = require('express');
const app = express();
const lesson1Controller = require('./controllers/lesson1');
const router = express.Router();
 
router.get('/home', lesson1Controller.homePage);
 
router.get('/profile', lesson1Controller.profilePage);
 
router.get('/login', lesson1Controller.loginPage);
 
router.get('/logout', lesson1Controller.logoutPage);
 
app.use('/', router);
 
app.listen(process.env.PORT || 3000, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});