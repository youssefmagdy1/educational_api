const express = require('express') ;
const {
    getExams ,
    updateExam,
    createExam,
    deleteExam,
} = require('../controller/exams.controller') ; 

const examsRouter = express.Router();

examsRouter.get('/' , getExams ); 
examsRouter.put('/:id' , updateExam ); 
examsRouter.delete('/:id' , deleteExam ); 
examsRouter.post('/' , createExam ); 


module.exports = examsRouter ; 
