

//Server en Node.js

const http = require("http");
const url = require("url");
const fs = require("fs");


const data = fs.readFileSync("data.json", "utf-8");
const dataJSON = JSON.parse(data);

http
  .createServer((req, res) => {
    const pathName = req.url;
    if (pathName === "/" || pathName === "/overview") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("Esta es la pagina de productos");
      res.end();
    } else if (pathName === "/product") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("Esta es la pagina de productos");
        res.end();
    } else if (pathName === "/api") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(data);
        console.log(dataJSON);
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>Page not found</h1>");
    }
  })
  .listen(3000, "127.0.0.1", () => {
    console.log("Servidor corriendo en el puerto 3000");
  });
