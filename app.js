import express from "express";
import * as dotenv from "dotenv";
import router from "./routes/index.js";
import connectDB from "./db/connect.js";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const mongodbAtlasUri = process.env.MONGODB_ATLAS_URI.trim();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Z-Key"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
 
});
app.use("/", router);

// Connect to the database
const start = async () => {
  try {
    console.log(
      "Starting the database connection, we will show status later.  Check your mongodDB server is on",
    );
    let signal = await connectDB(mongodbAtlasUri);
    console.log(`The signal to the database is  ${signal}`);
    console.log(
      "Connected to MongoDB Atlas, database connection has been verified",
    );
    app.listen(port, () => {
      console.log(`Web Server is listening at port ${port}`);
    });
  } catch (err) {
    console.error("MongoDB Atlas connection error:", err);
  }
};

start();
