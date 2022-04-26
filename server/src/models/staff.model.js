const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    ID: {
        type: String,
        required: true,
        unique: true
    },
    FirstName: {
        type: String,
        minLength: 6,
        maxLength: 15,
        required: true
    },
    MiddletName: {
        type: String,
        minLength: 6,
        maxLength: 15,
        required: false
    },
    LastName: {
        type: String,
        minLength: 6,
        maxLength: 15,
        required: true
    },
    Email: {
        type: String,
        minLength: 20,
        unique: true,
        required: true

    },
    Telephone: {
        type: String,
        minLength: 11,
        required: true
    },
    HomeAddress: {
        type: String,
        maxLength: 150,
        required: false
    },
    Title: {
        type: String,
        required: true
    },
    Department: {
        type: String,
        required: true,
    },
    Rank: {
        type: String,
        required: false
    },
    Salary: {
        type: Number,
        required: true
    }

});

module.exports = mongoose.model('Staff', staffSchema);