
const express = require('express');
require('dotenv').config();
const router = require('./routes');
const connectDB = require('./db/connect');
//const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;
const mongodbAtlasUri = process.env.MONGODB_ATLAS_URI;
// const Contact = require('./models/Contact');

//console.log("mongodbAtlasUri:", mongodbAtlasUri);
app.use(express.json());

app.use('/', router);

// Connect to the database
const start = async () => {
    try {
        await connectDB(mongodbAtlasUri);  
        console.log('Connected to MongoDB Atlas');
        //console.log(await mongoose.connection.db.listCollections().toArray());
        app.listen(port, () => {
            console.log('Web Server is listening at port ' + port);
        });
    } catch (err) {
        console.error('MongoDB Atlas connection error:', err);
    }
};

start();
// const contact = new Contact({
//     firstName: "John",
//     lastName: "Smith",
//     email: "smit@gmail.com",
//     favoriteColor: "black",
//     birthday: "25-02-1988"
// });
// contact.save();
// const contact1 = new Contact({
//     firstName: "Jane",
//     lastName: "Doe",
//     email: "doe@gmail.com",
//     favoriteColor: "brown",
//     birthday: "24-02-1990"
// });
// contact1.save();