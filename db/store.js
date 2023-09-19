const fs = require('fs');
const util = require('util');

// Promise version of fs.readFile
const readFileASync = util.promisify(fs.readFile);

const writeFileASync = util.promisify(fs.writeFile);

const { v4: uuidv4 } = require('uuid');


class Store {
    read(note) {
        return readFileASync("db/db.json", "utf8")
    }
    write(note) {
        return writeFileASync("db/db.json", JSON.stringify(note))
    }
    getNotes(note) {
        return this.read().then((notes) => {
            let displayNotes;
            try {
                displayNotes = [].concat(JSON.parse(notes))
            } catch (err) {
                displayNotes = []
            }
            return displayNotes;
        })
    
    }
    addNote(note){
        const {title, text } = note;
        if(!title || !text){
            throw new Error("Enter title and text");
        }
        const newNote = {
            title, text, id: uuidv4()
        }


        return this.getNotes()
        .then((notes) => [...notes, newNote])
        .then((updateNotes) => this.write(updateNotes))
        .then(() => newNote)
    }
};


module.exports = new Store();