var app = require('express')();
var server = require('http').createServer(app);
const io = require('socket.io')(server, {
    path: '/api',
    transports: ['websocket', 'xhr-polling']
});


console.log('=============== WIATING FOR SITE CONNECTION ===============');
io.on('connection', function(socket) {
    console.log('=============== CONNECTED ON SERVER ===============');
    socket.emit('CONNECTED', {connected: true});
    console.log('=============== TEST SUCESSFULL ===============');
});

server.listen(8033, '0.0.0.0', () => console.log('API Example is listening on port 8033'))