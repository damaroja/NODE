

//Server en Node.js

const http = require("http");
const url = require("url");
const fs = require("fs");

const data = fs.readFileSync("data.json", "utf-8");
const tempOverview = fs.readFileSync("./templates/overview.html", "utf-8");
const tempCard = fs.readFileSync("./templates/card.html", "utf-8");
const tempProduct = fs.readFileSync("./templates/product.html", "utf-8");
const dataJSON = JSON.parse(data);

const replaceTemplate = (temp, product) => {
  let output = temp;
  Object.keys(product).forEach((key) => {
    const replace = `/{%${key.toUpperCase()}%}/g`;
    output = output.replace(replace, product[key]);
  });
  return output;
};

http
  .createServer((req, res) => {
    const { query, pathname } = url.parse(req.url, true);
    if (pathname === "/" || pathname === "/overview") {
      res.writeHead(200, { "Content-Type": "text/html" });
      const cardsHtml = dataJSON.map((product) => {
        replaceTemplate(tempCard, product);
      });

      console.log(cardsHtml);
    } else if (pathname === "/product") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("Esta es la pagina de productos");
      console.log(query.id);
      res.end();
    } else if (pathname === "/api") {
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



//Importamos url
const url = require("url");
//Dentro de la creacion del server instanciamos url:
const { query, pathname } = url.parse(req.url, true);
//Y dentro de la ruta creada bajo pathname usamos query.id o query.<parameter>
console.log(query.id);




