import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  favoriteColor: String,
  birthday: String, // Changed to String
});

const Contact = mongoose.model("Contact", ContactSchema);

export default Contact;
