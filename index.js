var express = require('express');


var app = express();

app.use(express.static('www'));


app.get('/', function(req, res){

	res.sendFile('index.html',{root: __dirname + '/www/'}, function (err) {
	    if (err) {
	    	console.log(err)
	    } else {
	      console.log('Sent:');
	    }
	  });

})

app.get('/test', function(req, res){

	res.sendFile('test.html',{root: __dirname + '/www/'}, function (err) {
	    if (err) {
	    	console.log(err)
	    } else {
	      console.log('Sent:');
	    }
	  });

})

// var port = 80
var port = 8080
app.listen(port)
console.log('listening on port '+port)
