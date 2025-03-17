import Contact from "../models/Contact.js";

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json({ contacts });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Server error - could not retrieve contacts" });
  }
};
//get single contact
const getContactById = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findById(id);

    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.status(200).json({ contact });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Server error - could not retrieve contact" });
  }
};
//add contact

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
const addContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res
      .status(201)
      .json({ message: "Contact added successfully", id: newContact._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error - could not add contact" });
  }
};
//update contact
const updateContact = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedContact = await Contact.findByIdAndUpdate(id, req.body, {
      new: true});
    res
      .status(200)
      .json({
        message: "Contact updated successfully",
        contact: updatedContact,
      });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Server error - could not update contact" });
  }
};
// delete contact
const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    await Contact.findByIdAndDelete(id);
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Server error - could not delete contact" });
  }
};

const patchContact = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedContact = await Contact.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.status(200).json({ message: "Contact updated successfully", contact: updatedContact });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error - could not update contact" });
  }    
};

export default {
  getAllContacts,
  getContactById,
  addContact,
  updateContact,
  patchContact,
  deleteContact,
};
