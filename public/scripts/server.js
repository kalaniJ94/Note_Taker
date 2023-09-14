//TODO: sET UP ALL SERVER FILES HERE, ACCORDING TO EXPRESS STANDARDS?
const express = require('express');

const path = require('path');
//middleware?
const api = require('../scripts/index.js')

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

//GET route for homepage 
app.get('/', (req, res) => 
res.sendFile(path.join(__dirname, 'public/pages/index.html')));

//GET route for notes page
app.get('/notes', (req, res) => 
res.sendFile(path.join(__dirname, 'public/pages/notes.html')));

//Wildcard route
app.get('*', (req,res) => 
res.sendFile(path.join(__dirname, 'public/pages/404.html')));
//App Port listen
app.listen(PORT, () => 
console.log(`App listening at http://localhost:${PORT}`));
