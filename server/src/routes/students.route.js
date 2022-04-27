const {Router} = require('express');

const Student = require('../controller/student.controller');

const studentRouter = Router();

studentRouter.get('/', Student.getStudents);
studentRouter.get('/:id' , Student.getStudentById ); 
studentRouter.post('/', Student.createStudent);  
studentRouter.put('/:id', Student.updateStudent);
studentRouter.delete('/:id', Student.deleteStudent);
   

module.exports = {
    studentRouter,
}