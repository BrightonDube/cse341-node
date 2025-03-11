
const express = require('express');
require('dotenv').config();
const router = require('./routes');
const connectDB = require('./db/connect');
//const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;
const mongodbAtlasUri = process.env.MONGODB_ATLAS_URI;

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