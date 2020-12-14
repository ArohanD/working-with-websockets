const WebSocket = require('ws');
const express = require('express');
const PORT = process.env.PORT || 8080;

const server = express()
.use((req, res) => res.sendFile('./index.html', { root: __dirname }))
.listen(PORT, () => console.log(`Listening on ${PORT}`));

const wsServer = new WebSocket.Server({ server });

const messages = ['a', 'b', 'c'];
wsServer.on('connection', function connection(ws) {

  ws.send(JSON.stringify(messages))

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);

    messages.push(message)

    wsServer.clients.forEach((client) => {
      client.send(JSON.stringify(message));
    });
  });
});


setInterval(() => {
  console.log('messages:', messages)
}, 2000);
