// server.js

const WebSocket = require('ws');
const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

// Create a WebSocket server by passing the HTTP server instance
const wss = new WebSocket.Server({ server });

// Event listener for WebSocket connections
wss.on('connection', (ws) => {
  console.log('Client connected');

  // Event listener for messages received from clients
  ws.on('message', (message) => {
    console.log(`Received: ${message}`);

    // Broadcast the received message to all connected clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(`Server: ${message}`);
      }
    });
  });

  // Event listener for the WebSocket connection being closed
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
