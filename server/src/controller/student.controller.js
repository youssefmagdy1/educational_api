const Student = require('../models/student.model')


const createStudent = async(req, res) =>{
    try{
        console.log(325);
        const student = await Student.create(req.body);
        console.log(2);
        res.status(201).send(student);
    }
    catch(e){
        res.status(400).send(e);
    }
};

const getStudents = async(req, res) =>{
    try{
        const students = await Student.find({});
        res.status(200).send(students);
    }
    catch(e){
        res.status(400).send(e);
    }
};

const getStudentById = async(req, res) =>{
    try{
        const studentId = req.params.id;
        const student = await Student.findById({_id: studentId});
        if(student === null){
            res.status(404).send({message: "student not found"});
        }
        else
            res.status(200).send(student);
    }
    catch(e){
        res.status(404).send(e);
    }
};


const updateStudent = async(req, res) => {
    try{
        const studentId = req.params.id;
        const student = await Student.findOne({_id: studentId});
        if(student){
            const updatedStudent = Student.updateOne({_id: id}, req.body)
            res.status(200).send({message : "updated successfully"});
        }
        else{
            res.status(404).send({message : `No student member with id: ${studentId}`});
        }
    }
    catch(e){
        res.status(404).send(e);
    }
};

const deleteStudent = async(req, res) =>{
    try{
        const studentId = req.params.id;
        const student = await Student.deleteOne({_id: studentId});
        res.status(200).send(student);
    }
    catch(e){
        res.status(404).send(e);
    }
};


module.exports = {
    createStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
};