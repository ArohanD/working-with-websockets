const WebSocket = require('ws');
const express = require('express');
const PORT = process.env.PORT || 8080;

const server = express()
.use((req, res) => res.sendFile('./index.html', { root: __dirname }))
.listen(PORT, () => console.log(`Listening on ${PORT}`));

const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send('something back');
  });
 
  //ws.send('something');
});