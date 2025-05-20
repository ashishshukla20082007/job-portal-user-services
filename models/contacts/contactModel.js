const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({ 
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    name: {
        type: String,
        required: [true, 'Please add a name'],
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
    },
    phone: {
        type: String,
        required: [true, 'Please add a phone number'],
    }
}, {
    timestamps: true,
}); 
const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;