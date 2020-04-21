const express = require('express');
const bodyParser = require('body-parser');


// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect('mongodb+srv://Purnima:Purnima@cluster0-bfa1p.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});



// define a simple route
const http = require('http');
const url = require('url');
http.createServer(function (req, res) {
    const queryObject = url.parse(req.url,true).query;
    console.log(queryObject);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('');

})
  

//app.get('/add', function (req, res) {
  //  response = {
    //  result: req.query.param1 + req.query.param2,
   //};
   //res.end(JSON.stringify(response));
//})

;
require('./app/routes/note.routes.js')(app);
// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});


var request = require('request');

var propertiesObject = { field1:'test1', field2:'test2' };

request({url:url, qs:propertiesObject}, function(err, response, body) {
  if(err) { console.log(err); return; }
  console.log("Get response: " + response.statusCode);
});

