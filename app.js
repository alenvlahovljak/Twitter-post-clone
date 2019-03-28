var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var favicon = require('serve-favicon');
var moment = require('moment');

app.set("View engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use("/assets", express.static("assets"));
app.use("/public/img", express.static("img"));

var tweets = [];

//Time 
var time = moment().format('LLL');;
console.log(time);

// Express Routes here 
app.get("/", function(req, res){
   res.render("index.ejs", {tweets: tweets});
});

//Submit button route
app.post("/newtweet", function(req, res){
    time = moment().format('LLL');
    console.log("item submitted!");
    var item = req.body.item;
    tweets.push([item, time]);
    res.redirect("/");   
});

// Server listening on port 3000
app.listen(3000, function(){
    console.log("Server started on port 3000");
});


