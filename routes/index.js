import express from "express";
import contactsRoutes from "../routes/contacts.js";
import swagger from './swagger.js';
const router = express.Router();
router.use('/', swagger);
router.get("/", (req, res) => {
  //#swagger.tags= ['Hello world']
  res.send("Welcome");
});

router.use("/contacts", contactsRoutes);

export default router;
