const express = require('express') ;

const {
    getAllStaff,
    getById,
    updateStaff,
    createStaff,
    deleteStaff,
} = require('../controller/staff.controller');

const staffRouter = express.Router();

staffRouter.get('/', getAllStaff);
staffRouter.get('/:id', getById);
staffRouter.post("/", createStaff);
staffRouter.patch("/:id", updateStaff);
staffRouter.delete("/:id", deleteStaff);

module.exports = staffRouter;