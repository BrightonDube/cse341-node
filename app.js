import express from "express";
import * as dotenv from "dotenv";
import router from "./routes/index.js";
import connectDB from "./db/connect.js";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const mongodbAtlasUri = process.env.MONGODB_ATLAS_URI;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);

// Connect to the database
const start = async () => {
  try {
    await connectDB(mongodbAtlasUri);
    console.log("Connected to MongoDB Atlas");
    app.listen(port, () => {
      console.log(`Web Server is listening at port ${port}`);
    });
  } catch (err) {
    console.error("MongoDB Atlas connection error:", err);
  }
};

start();
