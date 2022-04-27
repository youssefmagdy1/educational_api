const {Schema, model} = require('mongoose');

const studentSchema = new Schema({

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

});

module.exports = model('Student', studentSchema);
