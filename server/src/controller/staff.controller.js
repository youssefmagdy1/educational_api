const { json } = require('body-parser');
const { readdirSync } = require('fs');
const Staff = require('../models/staff.model');

const getById = async (req, res) => {
    try {
        const staffId = req.params.id;
        console.log(staffId);
        const staff = await Staff.findById({ _id: staffId });
        res.status(201).send(staff);
    } catch (e) {
        res.status(404).send(e);
    }
};

const getAllStaff = async (req, res) => {
    const staff = await Staff.find({});
    res.status(201).send(staff);
};



const createStaff = async (req, res) => {
    try {
        const staff = await Staff.create(req.body);
        res.status(201).send(staff);
    } catch (e) {
        res.status(404).send(e);
    }
};

const updateStaff = async (req, res) => {
    try {
        const staffId = req.params.id;
        const staff = await Staff.updateOne( { _id : staffId}, req.body);
        res.status(201).send(staff);
    } catch (e) {
        res.status(404).send(e);
    }
};

const deleteStaff = async (req, res) => {
    try {
        const staffId = req.params.id;
        const staff = await Staff.deleteOne( { _id : staffId });
        res.status(201).send(staff);
    } catch (e) {
        res.status(404).send(e);
    }
};


module.exports = {
    getAllStaff,
    getById,
    createStaff,
    updateStaff,
    deleteStaff,
};
