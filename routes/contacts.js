import express from 'express';
import contactsController from '../controllers/contacts.js';

const router = express.Router();

// GET all contacts
router.get('/', contactsController.getAllContacts);

// GET a single contact by ID
router.get('/:id', contactsController.getContactById);

//add a new contact

/**
 * @swagger
 * /contacts/:
 *   post:
 *     description: Create a new contact
 *     parameters:
 *       - in: body
 *         name: contact
 *         description: Contact data to be added
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *             - firstName
 *             - lastName
 *             - email
 *           properties:
 *             firstName:
 *               type: string
 *             lastName:
 *               type: string
 *             email:
 *               type: string
 *             favoriteColor:
 *               type: string
 *             birthday:
 *               type: string
 *     responses:
 *       201:
 *         description: Created
 *       500:
 *         description: Internal Server Error
 */
router.post('/', contactsController.addContact);

// update contact
/**
 * @swagger
 * /contacts/{id}:
 *   put:
 *     description: Update a contact
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *       - in: body
 *         name: contact
 *         description: Updated contact data
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *             - firstName
 *             - lastName
 *             - email
 *           properties:
 *             firstName:
 *               type: string
 *             lastName:
 *               type: string
 *             email:
 *               type: string
 *             favoriteColor:
 *               type: string
 *             birthday:
 *               type: string
 *     responses:
 *       200:
 *         description: OK
 *       500:
 *         description: Internal Server Error
 */
router.put('/:id', contactsController.updateContact);

//patch contact
/**
 * @swagger
 * /contacts/{id}:
 *   patch:
 *     description: Partially update a contact
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *       - in: body
 *         name: contact
 *         description: Partial contact data to update
 *         required: false
 *         schema:
 *           type: object
 *           properties:
 *             firstName:
 *               type: string
 *             lastName:
 *               type: string
 *             email:
 *               type: string
 *             favoriteColor:
 *               type: string
 *             birthday:
 *               type: string
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Not Found
 *       500:
 *         description: Internal Server Error
 */
router.patch('/:id', contactsController.patchContact);

//delete contact
router.delete('/:id', contactsController.deleteContact);

export default router;
