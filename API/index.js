var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
console.log('=============== WIATING FOR SITE CONNECTION ===============');
io.on('connection', function(socket) {
    console.log('=============== CONNECTED ON SERVER ===============');
    socket.emit('CONNECTED', {connected: true});
    console.log('=============== TEST SUCESSFULL ===============');
});
server.listen(8033, 'localhost');