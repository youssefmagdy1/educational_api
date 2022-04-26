const express = require('express') ;

const {
    getAllStaff,
    getById,
    updateStaff,
    createStaff,
    deleteStaff,
} = require('../controller/staff.controller');

const staffRouter = express.Router();

staffRouter.get('/staff', getAllStaff);
staffRouter.get('/staff/:id', getById);
staffRouter.post("/staff", createStaff);
staffRouter.put("/staff/:id", updateStaff);
staffRouter.delete("/staff/:id", deleteStaff);

module.exports = staffRouter;