const router = require('express').Router;
const path = require('path');

//GET route for notes page
router.get('/notes', (req, res) => 
res.sendFile(path.join(__dirname, 'public/notes.html')));

//POST
router.post('/', (req, res) => {

    const { title, text } = req.body;
  
    // If all the required properties are present
    if (title && text) {
      const newNote = {
        title,
        text,
        id: uniqid(),
      };
  
      readAndWrite(newNote);
  
      const response = {
        status: 'success',
        body: newNote,
      };
  
      console.log(response);
      res.status(201).json(response);
    } else {
      res.status(500).json('Error in posting review');
    }
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

//Wildcard route
router.get('*', (req,res) => 
res.sendFile(path.join(__dirname, 'public/index.html')));

module.exports = router;
