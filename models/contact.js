const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
    },
    subject: {
        type: String,
    },
    message: {
        type: String,
    }
}, { timestamps: true }); 

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
