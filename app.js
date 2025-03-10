
const express = require('express');
const router = require('./routes');
require('dotenv').config();
const connectDB = require('./db/connect'); 
const app = express();
const port = process.env.PORT || 5000;
const mongodbAtlasUri = process.env.MONGODB_ATLAS_URI;

app.use('/', router);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to the database
const start = async () => {
    try {
        await connectDB(mongodbAtlasUri);  
        console.log('Connected to MongoDB Atlas');
        app.listen(port, () => {
            console.log('Web Server is listening at port ' + port);
        });
    } catch (err) {
        console.error('MongoDB Atlas connection error:', err);
    }
};

start();