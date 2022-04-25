const path = require('path');
const express = require('express');

const coursesRoute = require('./routes/courses.route');

const app = express();


app.use(express.json());
// app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/courses', coursesRoute);


module.exports = app;