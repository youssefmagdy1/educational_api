<<<<<<< HEAD
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

=======
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

>>>>>>> 72da2dc7047e4bf2569329cf0d2c37f70ecd83bb
module.exports = staffRouter;