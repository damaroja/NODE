

//Server en Node.js

const http = require("http");

http
  .createServer((req, res) => {
    res.end("Hola mundo");
  })
  .listen(3000, '127.0.0.1', () => {
    console.log("Servidor corriendo en el puerto 3000");
  });
