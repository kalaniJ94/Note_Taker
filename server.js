// Middleware for parsing JSON and urlencoded form data

const express = require('express');
const path = require('path');
const api = require('/Users/kalan/bootcamp/Challenges/Note_Taker/server')

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware for parsing JSON and urlencoded form data

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));


// const notesRouter = require('./public/routes/notes');


// app.use('/notes', notesRouter);

// module.exports = app;
//GET route for homepage 
app.get('/', (req, res) => 
res.sendFile(path.join(__dirname, 'index.html')))
console.log(__dirname);

//GET route for notes page
app.get('/notes', (req, res) => 
res.sendFile(path.join(__dirname, 'public/pages/notes.html')));

//Wildcard route
app.get('*', (req,res) => 
res.sendFile(path.join(__dirname, 'public/pages/404.html')));

//App Port listen
app.listen(PORT, () => 
console.log(`App listening at http://localhost:${PORT}`));
