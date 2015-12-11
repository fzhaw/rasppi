//Lets require/import the HTTP module
var http = require('http');
var querystring = require('querystring');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
var screens = {};
var fs = require('fs');


//Lets define a port we want to listen to
const PORT=8081; 


//Lets use our dispatcher
function handleRequest(request, response){
    try {
        //log the request on console
        console.log(request.url);
        //Disptach
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
};

app.post('/register',function(req,res){
  console.log(req.body);
  screens[req.body.name] = req.body;
  console.log(screens);
  res.end("POST Request Done");
});

app.get('/', function(req,res){
  fs.readFile(__dirname + "home.html", function(err, data) {
    if (err) {
      console.log(err);
      res.writeHead(500);
      return res.end('Error loading file');
    }
    res.writeHead(200);
    res.end(data);
    })
})

app.get('/screens', function(req,res){
  console.log(screens);
  res.json(screens);
  res.end();
})

app.listen(3000,function(){
  console.log("Started on PORT 3000");
})


