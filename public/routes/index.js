const express = require('express');

const app = express();


const notesRouter = require('./public/routes/notes');


app.use('/notes', notesRouter);

module.exports = app;
