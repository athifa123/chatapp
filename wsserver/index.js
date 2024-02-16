
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server , {
    cors: {
      origin: "http://localhost:3001"
    }
  });

io.on('connection', (clientSocket) => {
    console.log(' user connected');
    clientSocket.on('disconnect',
        () => {
            console.log(" user disconnected");

        })
        clientSocket.on("message", (data) =>{
            console.log("userdata", data)
            clientSocket.broadcast.emit('message', data);
        })


});

server.listen(8080, () => {
    console.log('listening on *:8080');
});