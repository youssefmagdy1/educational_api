const { json } = require('body-parser');
const { readdirSync } = require('fs');
const staffDB = require('../models/staff.model'); 
const Joi = require('joi');
const { request } = require('http');


async function _getAllMembers (req ,res ){
    
    const allStaff = await staffDB.find({}) ;
    return res.send(allStaff) ;

}
  

async function _getById(req, res) {
    const id = req.params.id;
    const staff = await staffDB.findOne({_id :id});
    return res.status(200).send(staff) ;
};
  
const _createStaffEntry = (req, res) => {
  
  
    if(validateStaff(req.body)) return;
  
    const member = {
      FirstName: req.body.FirstName,
      MiddleName: req.body.MiddleName,
      LastName: req.body.LastName, 
      HomeAddress: req.body.HomeAddress,
      Telephone: req.body.Telephone,
      Email: req.body.Email,
      Title: req.body.Title,
      Department: req.body.Department,
      Rank: req.body.Rank,
      Salary: req.body.Salary,
    };
    staffDB.create(member);
    res.send(member);
};
  
const _updateStaffEntry =  async (req, res) => {

    const id = req.params.id;
    const staff = staffDB.findOne({_id :id});
    if (staff) {
        const updatedStaff =  await staffDB.updateOne({_id :id} , {$set :req.body} ) ; 

        res.status(200).send(updatedStaff);

    } else {
        res.status(404).send({ error: `No staff memeber with id: ${staff.id}.`});
    }
};
  
async function _deleteStaffEntry (req, res)  {
    const id = req.params.id;
    const staff = await staffDB.deleteOne(({_id:id}));
    res.send(staff);
};
  
function validateStaff (member) {
    const shcema = {
        firstName: Joi.string().min(5).required(),
        middleName: Joi.string().min(5),
        lastName: Joi.string().min(5).required(),
        location: Joi.string().min(10),
        telephone: Joi.string().length(11).required(),
        website: Joi.string().uri()
    };

    const { error } = staffDB.validate(member);
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
  