const path = require('path');
const express = require('express');

const coursesRoute = require('./routes/courses.route');
const staffRoute = require('./routes/staff.route');

const examsRouter = require('./routes/exams.route');
const {studentRouter} = require('./routes/students.route');

const app = express();

app.use(express.json());

app.use('/courses', coursesRoute);
app.use('/staff', staffRoute);

app.use('/exams', examsRouter)

app.use('/students', studentRouter);

module.exports = app;