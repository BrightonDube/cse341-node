import mongoose from 'mongoose';

const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("Connect to the Database");
    return mongoose.connection;
  } catch (error) {
    console.error("ConnectDB error", error);
  }
};

export default connectDB;