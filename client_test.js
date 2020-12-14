const WebSocket = require('ws');
 
const heroku = 'web-socket-playground.herokuapp.com'
const local = `localhost:8080`
const ws = new WebSocket(`ws://${local}`);
 
ws.on('open', function open() {
  ws.send('something');
});
 
ws.on('message', function incoming(data) {
  console.log(data);
});