var express = require("express");
var path = require("path");
var posts = require('./dataController');
var app = express();
var rootPath = path.normalize(__dirname + "/../");
var bodyParser = require("body-parser");


//-----------------------
var http = require('http');
var serialport = require("serialport");
var SerialPort = serialport.SerialPort;
var portName = "/dev/cu.usbmodem1411";




function posttemp (req, res) {
    var post = {type: 1};
    res.setHeader('Content-Type', 'application/json');
    res.send(post);
};

var myPort = new SerialPort(portName, {
    baudRate:9600,
    parser: serialport.parsers.readline("\r\n")
});

myPort.on('open', onOpen);
myPort.on('data', onData);

var data =["aa"];

function onOpen(){
    console.log("openconncetion");
}

function onData(data){
    console.log(data);
    //data.push(data);
}
function onRequest(request, response){
    console.log("user made a request"+request.url);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Here is some data");
    response.end;
}


//http.createServer(onRequest).listen(8888);
//console.log("server is running");

//-----------------------





//-----------------

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(rootPath + "/app"));
app.get('/posts/getall', posts.getall);
app.post('/post/save', posts.save);
app.get('/sensors', posttemp);



app.listen(8000);
console.log("Running on 8000");

