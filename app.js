const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
app = express()
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next)=>{
    res.render('chatbot');
})
app.listen(3000)