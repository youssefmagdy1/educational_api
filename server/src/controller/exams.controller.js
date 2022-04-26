const Exam = require("../models/exams.model");
const ObjectID = require("mongoose").Types.ObjectId;

async function getExams(req, res) {
    try {
        const exams = await Exam.find();
        res.status(200).json({exams});
    } catch (error) {
        res.status(500).json({error});
    }
}

async function updateExam(req,res){
    try{
        const id = req.params;
        const {time} = req.body;
        const exam = await Exam.updateOne({id}, {time });
        res.status(200).json({exam});
    }
    catch(error){
        res.status(400).json({error});
    }
}

async function createExam(req, res){
    const {course,time,student} = req.body;
    const courseId = ObjectID(course);
    const studentID = ObjectID(student);
    try{
        const newExam = new Exam({relatedCourse: courseId,time,studentID});
        await newExam.save();
        res.status(200).json({newExam});
    }
    catch(error){
        console.log(error)
        res.status(400).json({error});
    }
}

async function deleteExam(req,res){
    try{
        const id = req.params;
        await Exam.deleteOne({id});
        res.status(200).json({exam});
    }
    catch(error){
        res.status(500).json({error});
    }
}

module.exports = {
    getExams ,
    updateExam,
    createExam,
    deleteExam,
};