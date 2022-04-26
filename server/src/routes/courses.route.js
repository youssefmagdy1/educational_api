const express = require('express') ;
const {
    getAllCourses ,
    getYearCourses ,
    getCourseByCode ,
    updateCourse ,
    deleteCourse ,
    createCourse ,
} = require('../controller/courses.controller') ; 

const coursesRouter = express.Router();

coursesRouter.get('/' , getAllCourses ); 
coursesRouter.get('/:code' , getCourseByCode ); 
coursesRouter.get('/year/:year' , getYearCourses ); 
coursesRouter.put('/:id' , updateCourse ); 
coursesRouter.delete('/:id' , deleteCourse ); 
coursesRouter.post('/' , createCourse ); 


module.exports = coursesRouter ; 
