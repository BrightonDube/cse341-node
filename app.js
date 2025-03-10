const express = require('express');
const app = express();
const router = require('./routes');
require('dotenv').config();

const port = process.env.PORT || 5000;
const mongodbAtlasUri = process.env.MONGODB_ATLAS_URI;
const mongoose = require('mongoose');

app.use('/', router);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(mongodbAtlasUri)
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('MongoDB Atlas connection error:', err));
app.listen(port, () => {
  console.log('Web Server is listening at port ' + port);
});