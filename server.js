//Lets require/import the HTTP module
var http = require('http');
var querystring = require('querystring');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

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
}


app.post('/post',function(req,res){
  console.log(req.body);
  var user_name=req.body.user;
  var password=req.body.password;
  console.log("User name = "+user_name+", password is "+password);
  res.end("yes");
});
app.listen(3000,function(){
  console.log("Started on PORT 3000");
})

////Lets start our server
//server.listen(PORT, function(){
//    //Callback triggered when server is successfully listening. Hurray!
//    console.log("Server listening on: http://localhost:%s", PORT);
//});
