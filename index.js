const txtgen = require('txtgen');
const express = require('express');
const bodyParser = require('body-parser');
let ejs = require('ejs');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('landing')    
})

app.listen(3001, () => {
    console.log('Server Started');
})