var express = require('express');
var app = new express();
var parser = require('body-parser');

require('./database.js');

app.get('/',function(req,res){
    res.sendFile('C:/Users/MV056700/Desktop/PROJECTS/Integrated/LP BE/src/index.html');
})
.use(express.static(__dirname + '/../dist'))
.listen(7777);
app.use(parser.json());
app.use(parser.urlencoded({extended:false}));
require('./routes/items.js')(app);