var express = require("express");
var path = require("path");
var posts = require('./dataController');
var app = express();
var rootPath = path.normalize(__dirname + "/../");
var bodyParser = require("body-parser");
//var querystring = require('querystring');
var request = require("request");


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


function onOpen(){
    console.log("openconncetion");
}

function onData(data){
    console.log("Temperature: "+data);
    // fire request
    request.post({
        url: "https://api.backand.com:443/1/objects/values",
        json: {


            type: 1,
            value: data,
            sensor: 52,
            timestamp: 1,
            place: 1


        },
        headers:{
            'AnonymousToken': '501575af-13ef-4636-beb1-9c4be3038736',
            'content-type': 'application/json'
        }

    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(body);
        }
        else {

            console.log("error: " + error);
            console.log("response.statusCode: " + response.statusCode);
            console.log("response.statusText: " + response.statusText);
        }
    })
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(rootPath + "/app"));

app.listen(8000);
console.log("Running on 8000");


// JSON to be passed to the QPX Express API
var requestData = {


            type: 1,
            value: 1,
            sensor: 2,
            timestamp: 1,
            place: 1


};
