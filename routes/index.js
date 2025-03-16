import express from "express";
import contactsRoutes from "../routes/contacts.js";
const router = express.Router();
router.get("/", (req, res) => {
  res.send("Welcome");
});

router.use("/contacts", contactsRoutes);

export default router;
