import express from 'express';
import contactsController from '../controllers/contacts.js';

const router = express.Router();

// GET all contacts
router.get('/', contactsController.getAllContacts);

// GET a single contact by ID
router.get('/:id', contactsController.getContactById);

//add a new contact
router.post('/', contactsController.addContact);
// update contact
router.put('/:id', contactsController.updateContact);
//delete contact
router.delete('/:id', contactsController.deleteContact);

export default router;
