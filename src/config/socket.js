import http from "http";

import socketio from "socket.io";
import app from "./server";

const server = http.createServer(app);
const io = socketio(server);
io.on("connection", (socket) => {
  console.log('conectado', socket.id);
  
  
});
export default server;
