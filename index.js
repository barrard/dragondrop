var express = require('express');


var app = express();

app.use(express.static('www'));


app.get('/', function(req, res){

	res.sendFile('index.html',{root: __dirname + '/client/'}, function (err) {
	    if (err) {
	    	console.log(err)
	    } else {
	      console.log('Sent:');
	    }
	  });

})


app.listen(80)
