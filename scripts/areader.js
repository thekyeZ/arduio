/**
 * Created by kyez on 04.10.2016.
 */
var serialport = require("serialport");
var SerialPort = serialport.SerialPort;
var portName = "/dev/cu.usbmodem1411";
var express = require("express");
var path = require("path");
var posts = require('./dataController');
var app = express();
var rootPath = path.normalize(__dirname + "/../");
var bodyParser = require("body-parser");


function posttemp (req, res) {
    var post = {type: 1};
    res.setHeader('Content-Type', 'application/json');
    res.send(post);
};

var myPort = new SerialPort(portName, {
    baudRate:9600,
    parser: serialport.parsers.readline("\r\n")
});