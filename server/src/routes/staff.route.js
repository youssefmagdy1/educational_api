const express = require('express') ;

const {
    _getAllMembers,
    _getById,
    _createStaffEntry,
    _updateStaffEntry,
    _deleteStaffEntry,
} = require('../controller/staff.controller');

const staffRouter = express.Router();

staffRouter.get('/', _getAllMembers);
staffRouter.get('/:id', _getById);
staffRouter.post('/', _createStaffEntry);
staffRouter.put("/:id", _updateStaffEntry);
staffRouter.delete("/:id", _deleteStaffEntry);

module.exports = staffRouter;