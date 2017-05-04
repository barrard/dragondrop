
var port = 8081
var io = require('socket.io')(port)


// io(port)
var socketArray=[]
io.on('connection', function (socket) {
	console.log('connection')
	socketArray.push(socket)
  socket.emit('socketCount', socketArray.length );
  socket.on('userClick', function (data) {
    //userClick evet
    console.log('userClick')
    console.log(data);
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
    io.sockets.emit('userDisconnected', socket.id)
})


});

console.log('listing on port ' +port)
     