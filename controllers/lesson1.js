const homePage = (req, res) => {
    res.send("This is my Home page");
};

const aboutPage = (req, res) => {
    res.send("This is my About page");
};

module.exports = {
    homePage,
    aboutPage
};