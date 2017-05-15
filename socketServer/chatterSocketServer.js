var app = require('http').createServer(handler)
var db = require('./chatterDB.js')
var port = 8081
var io = require('socket.io')(app);
var fs = require('fs');


app.listen(8081)
db.test()

function handler (req, res) {
  console.log('Socket Handler hit')
  console.log('wahts the req object look like')
  console.log(req.url)
  fs.readFile(__dirname + req.url,
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}


// io(port)
var socketArray=[]
io.on('connection', function (socket) {
	console.log('connection')
	socketArray.push(socket)
  socket.on('usernameInput', function(d){
    io.emit('socketCount', socketArray.length );
    socket.emit('serverID', d)


  })
  socket.on('inputText', function(d){
    socket.broadcast.emit('inputText', d)
  })



socket.on('disconnect', function(){
    var indexOfDisconectedSocket = socketArray.indexOf(socket)
    if(indexOfDisconectedSocket >-1){
      console.log('remove this socket '+socket.id+' from socketArray')
      socketArray.splice(indexOfDisconectedSocket,1)
    }else{
      console.log('this socket is lost...? '+socket.id)
    }
    console.log('disconnection! '+socket.id)
    io.emit('socketCount', socketArray.length );

    io.sockets.emit('userDisconnected', socket.id)
})


});

console.log('listing on port ' +port)
     