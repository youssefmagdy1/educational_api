const express = require('express') ;

const {
    _getAllMembers,
    _getById,
    _createStaffEntry,
    _updateStaffEntry,
    _deleteStaffEntry,
} = require('../controller/staff.controller');

const staffRouter = express.Router();

staffRouter.get('/staff', _getAllMembers);
staffRouter.get('/staff/:id', _getById);
staffRouter.post("/staff", _createStaffEntry);
staffRouter.put("/staff/:id", _updateStaffEntry);
staffRouter.delete("/staff/:id", _deleteStaffEntry);

module.exports = staffRouter;