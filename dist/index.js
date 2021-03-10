const app = require('express')();
const http = require('http').Server(app);
const socketIO = require('socket.io')(http);
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
socketIO.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        socketIO.emit('chat message', msg);
    });
});
http.listen(4000, () => {
    console.log('listening on *:4000');
});
//# sourceMappingURL=index.js.map