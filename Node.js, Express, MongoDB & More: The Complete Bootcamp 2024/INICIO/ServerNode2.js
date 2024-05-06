

//Server en Node.js

const http = require("http");
const url = require("url");

http
  .createServer((req, res) => {
    const pathName = req.url
    if(pathName === '/overview'){
        res.write("Esta es la pagina de overview");
        res.end();
    } else if(pathName === '/product'){
        res.write("Esta es la pagina de productos");
        res.end();
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end('<h1>Page not found</h1>');
    }
  })
  .listen(3000, '127.0.0.1', () => {
    console.log("Servidor corriendo en el puerto 3000");
  });
