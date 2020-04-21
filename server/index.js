const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const PORT = 3001 || process.env.PORT;

//Setup
http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});

io.on('connection', (socket) => {
  console.log(`A user connected at ${Date()}`);

  socket.on('chatMessage', (msg) => {
    console.log(`Sending message: ${JSON.stringify(msg)}`);
    io.emit('message', msg);
  })

});

//HTTP Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});