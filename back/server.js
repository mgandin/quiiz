var express = require('express');

var mongoose = require('mongoose');

var app = express();

var http = require('http').Server(app);

var conf = require('./server.json');

mongoose.connect('mongodb://localhost/quiiz');

var questionSchema = mongoose.Schema({
		id: String,
		question: String,
		choix: [
			{
				id: String,
				text: String
			}
		],
		reponse: String
});
var Question = mongoose.model('questions',questionSchema);

app.get('/', function(req,res) {
	Question.find(function(err,questions){
		res.send(questions);
	});
	
});

http.listen(3000, function() {
	console.log('listening on *:3000');
});