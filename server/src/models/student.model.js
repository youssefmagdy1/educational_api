const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },

    name: {
        type: String,
        required: true  
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    department: {
        type: String,
        required: true,
    },

    year: {
        type: String,
        required: true
    },

    mobile_phone: {
        type: String,
        unique: true
    }

});

module.exports = mongoose.model('Student', studentSchema);