const path = require('path');
const express = require('express');

const coursesRoute = require('./routes/courses.route');
const staffRoute = require('./routes/staff.route');

const examsRouter = require('./routes/exams.route');

const app = express();


app.use(express.json());
// app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/courses', coursesRoute);
app.use('/staff', staffRoute);

app.use('/exams', examsRouter)


module.exports = app;