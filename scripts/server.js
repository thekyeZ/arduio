var express = require("express");
var path = require("path");
var posts = require('./dataController');
var app = express();
var rootPath = path.normalize(__dirname + "/../");
var bodyParser = require("body-parser");



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(rootPath + "/app"));
app.get('/posts/getall', posts.getall);
app.post('/post/save', posts.save);



app.listen(8000);
console.log("Running on 8000");
