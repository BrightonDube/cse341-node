const express = require("express");
const contactsController = require("../controllers/contacts");
const router = express.Router();

// GET all contacts
router.get("/", contactsController.getAllContacts);

// GET a single contact by ID
router.get("/:id", contactsController.getContactById);
//add a new contact
router.post("/", contactsController.addContact);

module.exports = router;
