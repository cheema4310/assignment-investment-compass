const Contact = require('../models/contact-model');

const createContactMsg = async (req, res) => {
  const { name, email, message } = req.body;
  const newMessage = new Contact({ name, email, message });

  try {
    await newMessage.save();
    res.status(201).json({ message: 'Contact Message is created' });
  } catch (error) {
    res.staus(500).json({ message: error.message });
  }
};

module.exports = { createContactMsg };
