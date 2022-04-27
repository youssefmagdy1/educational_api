const { json } = require('body-parser');
const { readdirSync } = require('fs');
const Courses = require('../models/courses.model') ; 


async function getAllCourses (req ,res ){
    
    const course = await Courses.find({}) ;
    return res.send(course) ;

}

async function createCourse (req , res) {
    try{
        // TODO : validate course 
        const course = await Courses.create(req.body) ; 
        return res.status(201).send(course) ;
    }catch(e){
        return res.status(404).send(e) ;
        
    }
}



async function getYearCourses (req ,res ){
    try{
        const year = Number( req.params.year ) ;
        const course = await Courses.find({Year:year}) ; 
        return res.status(200).send(course) ;
    }catch(e){
        return res.status(404).send(e) ;
        
    }
}

async function getCourseByCode (req ,res ){
    try{
        const code = Number( req.params.code ) ;
        const course = await Courses.find({Code:code}) ; 
        return res.status(200).send(course) ;
    }catch(e){
        return res.status(404).send(e) ;
        
    }
}

async function updateCourse (req ,res ){

    try{
        const courseID =  req.params.id
        const course = await Courses.findOne({_id : courseID})

        if(req.body.content){
            course.content = req.body.content;
        }
        if(req.body.status){
            course.status = req.body.status;
        }
    
        await course.save()
        res.status(200).send(course)
    }
    catch(e){
        res.status(400).send(e)
     }
    
}

async function deleteCourse (req ,res ){
    try{
        const courseID =  req.params.id
        const course = await Courses.deleteOne({_id : courseID})
        res.status(200).send(course)
    }
    catch(e){
        console.log(e)
        res.status(400).send(e)
     }
}



module.exports={
    getAllCourses ,
    getYearCourses ,
    getCourseByCode ,
    updateCourse ,
    deleteCourse ,
    createCourse ,
};