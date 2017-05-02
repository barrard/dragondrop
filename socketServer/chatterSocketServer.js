
var port = 8081
var io = require('socket.io')(port)


// io(port)

io.on('connection', function (socket) {
	console.log('connection')
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

console.log('listing on port ' +port)
     