const WebSocket = require('ws');
const port = process.env.PORT || 5000;
const wss = new WebSocket.Server({ port: port });
 
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send('something back');
  });
 
  //ws.send('something');
});