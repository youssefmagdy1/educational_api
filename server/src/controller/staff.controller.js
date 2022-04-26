const { json } = require('body-parser');
const { readdirSync } = require('fs');
const Staff = require('../models/staff.model'); 

const _getAllMembers = (req, res) => {
    return res.send(staffDB);
};
  
const _getById = (req, res) => {
    const id = parseInt(req.params.id);
    const staff = staffDB.find((staff) => staff.id === id);
    if (staff) {
      res.send(staff);
    } else {
      res.status(404).send({ error: "NOTFOUND" });
    }
};
  
const _createStaffEntry = (req, res) => {
  
  
    if(validateStaff(req.body)) return;
  
    const member = {
      id: staff.length()+1,
      firstName: req.body.firstName,
      middleName: req.body.middleName,
      lastName: req.body.lastName,
      location: req.body.location,
      telephone: req.body.telephone,
      website: req.body.website
    };
    staffDB.push(member);
    res.send(member);
};
  
const _updateStaffEntry = (req, res) => {
    const id = parseInt(req.params.id);
    const staff = staffDB.find(
        (staff) => staff.id === id
    );
    if (staff) {
        if(validateStaff(req.body)) return;

        staffDB[staff.id] = {
        ...staffDB[staff.id],
        ...req.body,
        };
        res.send(staffDB[staff.id]);
    } else {
        res.status(404).send({ error: `No staff memeber with id: ${staff.id}.`});
    }
};
  
const _deleteStaffEntry = (req, res) => {
    const id = parseInt(req.params.id);
    staffDB = staffDB.filter((member) => member.id !== id);
    res.send({ message: "Success" });
};
  
function validateStaff (member) {
    const shcema = {
        firstName: Joi.String().min(5).required(),
        middleName: Joi.String().min(5),
        lastName: Joi.String().min(5).required(),
        location: Joi.String().min(10),
        telephone: Joi.String().length(11).required(),
        website: Joi.String().uri()
    };

    const { error } = Joi.validate(member, schema);
    if (error) {
        res.status(400).send(error.details[0].message);
        return 1;
    }
    return 0;
}
  
module.exports = {
    _getAllMembers,
    _getById,
    _createStaffEntry,
    _updateStaffEntry,
    _deleteStaffEntry,
};
  