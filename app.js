//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");


const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){

  const user = req.body.username;
  const pass = req.body.password;
  if(user === "admin" && pass === "password" )
  {
    res.sendFile(__dirname + "/success.html");
  }
  else
  {
    res.sendFile(__dirname + "/faliure.html");
  }
  console.log(user,pass);
});

app.get("/faliure.html",function(req,res){
  res.sendFile(__dirname + "/faliure.html");
});

app.post("/faliure",function(req,res){
  res.redirect("/");
});


app.listen(3000,function(){
  console.log("Server is running on port 3000");
});
