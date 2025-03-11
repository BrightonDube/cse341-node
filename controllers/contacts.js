
const Contact = require('../models/Contact');

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    //res.json(contacts);
    //console.log("Contacts from DB:", contacts); 
    res.status(200).json({ contacts });  
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error - could not retrieve contacts' });
  }
};


const getContactById = async (req, res) => {
  try {
    const { id } = req.params; 
    const contact = await Contact.findById(id); 

    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' }); 
    }

    res.status(200).json({ contact });  
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error - could not retrieve contact' }); 
  }
};

module.exports = {
  getAllContacts,
  getContactById
};