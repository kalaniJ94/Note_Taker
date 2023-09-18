const express = require('express')
const router = express.Router();
// import {router as expressRouter} from 'express';
// const router = expressRouter();
const store = require('../db/store');


//GET api/notes
router.get('/notes', (req, res) => {
    store
        .getNotes()
        .then((notes) => {
            return res.json(notes);
        })
        .catch((err) => res.status(500).json(err))
});

module.exports = router;

// proto.route = function route(path) {
//     var route = new Route(path);
  
//     var layer = new Layer(path, {
//       sensitive: this.caseSensitive,
//       strict: this.strict,
//       end: true
//     }, route.dispatch.bind(route));
  
//     layer.route = route;
  
//     this.stack.push(layer);
//     return route;
//   };
  