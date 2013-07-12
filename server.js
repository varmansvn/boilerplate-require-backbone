var express = require('express');
var app = express();

app.configure(function() {
	app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res) {
	res.render('index.html');
});

var name = 'boilerplate app';
var ip = '127.0.0.1';
var port = 8181;

app.listen(port, ip, function() {
   console.log('%s: %s is started on %s:%d ...', name, Date(Date.now()),
               ip, port);
});
