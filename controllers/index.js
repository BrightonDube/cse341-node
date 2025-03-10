
const homePage =  (req, res) => {
  res.send('Hello World, This is home router');
};
 
const profilePage = (req, res) => {
  res.send('Hello World, This is profile router');
};
 
const loginPage =  (req, res) => {
  res.send('Hello World, This is login router');
};
 
const logoutPage =  (req, res) => {
  res.send('Hello World, This is logout router');
};

const contacts = (req, res) => {
  res.send('Hello World, This is contacts router');
  };
 
module.exports = {
    homePage,
    profilePage,
    loginPage,
    logoutPage
};