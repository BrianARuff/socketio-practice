const app = require('express')();
const http = require('http').Server(app);
const socketIO = require('socket.io')(http);

app.get('/', (req:any, res:any) => {
  res.sendFile(__dirname + '/index.html');
});

socketIO.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    socketIO.emit('chat message', msg);
  });
});


http.listen(process.env.PORT || 3000, () => {
  console.log('listening on *:' + process.env.PORT);
});
