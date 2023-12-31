// const router = require('express').Router;
const express = require('express')
const router = express.Router();

const path = require('path');

//GET route for notes page
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

//Wildcard route
router.get('*', (req,res) => 
res.sendFile(path.join(__dirname, '..public/index.html')));

module.exports = router;
