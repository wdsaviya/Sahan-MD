var fs = require('fs');
var crypto = require('crypto');
var request = require('request');
var log4js = require('log4js');
var sha256 = require('sha256');
var express = require('express');
var randomMath_questions = require('random-math-question');
var randomWord = require('random-word');
var config = require('./config.js');
var options = {
    key: fs.readFileSync('echo.key'),
    cert: fs.readFileSync('echo.crt'),
    requestCert: false
};
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
server.listen(6969, '0.0.0.0');
var ExpressTrade = require('expresstrade');

var ET = new ExpressTrade({
    apikey: config.vgo_api_key,
    twofactorsecret: config.secret,
    pollInterval: config.poll_interval
});
