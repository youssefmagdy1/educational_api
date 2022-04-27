const express = require('express') ;

const Student = require('../controller/student.controller.js');

const studentRouter = express.Router();

/*
    / in the rout doesn't mean http://localhost:3000/  
    it's mean
    http://localhost:3000/student/  define in the app
*/
studentRouter.get('/', Student.getStudents);
studentRouter.get('/:id' , Student.getStudentById ); 
studentRouter.post('/', Student.createStudent);  
   


module.exports = studentRouter ; 