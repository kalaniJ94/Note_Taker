const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {
    readFromFile,
    readAndAppend,
    writeToFile,
} = require('../helpers/fsUtils');

notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req, res) => {
    console.log ("From post route," + req.body);

    const { title, text} = req.body;

    if(req.body) {
        const newNote = {
            title, 
            text,
            note_id: uuidv4(),
        };

        readAndAppend(newNote, './db/notes.json');
        res.json('Note added successfully via R&A');
    } else {
        res.error('Error in adding note, R&A' + error)
    }
});

module.exports = notes;