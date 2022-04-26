const {Schema, model} = require('mongoose');

const ExamSchema = new Schema({

    relatedCourse:{
        type: Schema.Types.ObjectId,
        ref: 'Courses',
        required : true,
    },
    time :{
        type: Date,
        required : true,
    },
    studentID:{
        type: Schema.Types.ObjectId,
        ref : 'Student',
        required: true,
    },

});

const Task = model('Exams',ExamSchema);