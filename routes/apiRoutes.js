const express = require('express')
const router = express.Router();
const store = require('../db/store');
const { v4: uuidv4 } = require('uuid');



//GET api/notes
router.get('/notes', (req, res) => {
    store
        .getNotes()
        .then((notes) => {
            return res.json(notes);
        })
        .catch((err) => res.status(500).json(err))
});

// //POST
router.post('/notes', (req, res) => {
// store.read(note),
// store.write(note),
// store.getNotes(note),
// store.addNote(note)  


store.addNote(req.body)
.then((note) => res.json(note));
console.log("hello");
});
    //Delete  
  router.delete('/:id', (req, res) => {
    res.send('Got a DELETE request at /user')
    if (req.params.id){ 
      deleteNote(req.params.id);
      
  
    }else{
      res.status(500).json("Provide a Note ID");
    }
  })


module.exports = router;
