const mongoose = require('mongoose');

const StaffSchema = new mongoose.Schema({
    ID: {
        type: String,
        required: false,
        unique: true
    },
    FirstName: {
        type: String,
        minLength: 3,
        maxLength: 15,
        required: true
    },
    MiddleName: {
        type: String,
        minLength: 3,
        maxLength: 15,
        required: false
    },
    LastName: {
        type: String,
        minLength: 3,
        maxLength: 15,
        required: true
    },
    Email: {
        type: String,
        minLength: 10,
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

module.exports = mongoose.model('Staff', StaffSchema);