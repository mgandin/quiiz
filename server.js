var express = require('express');

var app = express();
var http = require('http').Server(app);

var conf = require('./server.json');

var questions = require(conf.questions);

app.get('/', function(req,res) {
	res.send(questions);
});

http.listen(3000, function() {
	console.log('listening on *:3000');
});