const path = require('path');
const express = require('express');

const coursesRoute = require('./routes/courses.route');
const studentRoute = require('./routes/students.route.js');

const app = express();

app.get("/hello", (req, res) =>{
    res.status(200).send("alllllllo");
})

app.use(express.json());
// app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/courses', coursesRoute);

app.use('/students', studentRoute);

module.exports = app;