// Middleware for parsing JSON and urlencoded form data

const express = require('express');
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

const app = express();
const PORT = process.env.PORT;

// Middleware for parsing JSON and urlencoded form data

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// // //GET route for homepage 
// app.get('/', (req, res) => 
// res.sendFile(path.join(__dirname, 'public/index.html')))


//App Port listen
app.listen(PORT, () => 
console.log(`App listening at http://localhost:${PORT}`));
