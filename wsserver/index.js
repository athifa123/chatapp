
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server ) ;// ,{
   // cors: {
    //  origin: "http://localhost:3000"
    //}
 // }



 io.of('/wss-chat').on('connection', (clientSocket) => {
    console.log(' user connected');
    clientSocket.on('disconnect',
        () => {
            console.log(" user disconnected");

        })
        clientSocket.on("message", (data) =>{
            console.log("userdata", data)
            clientSocket.broadcast.emit('response', data);
        })


});
app.get('/',(request, response) => {
    response.send('express js on vercel')
})
server.listen(8080, () => {
    console.log('listening on *:8080');
});

module.exports = app;