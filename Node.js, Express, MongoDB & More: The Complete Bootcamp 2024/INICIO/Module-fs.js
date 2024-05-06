
//Haty que tener una archivo de texto en el mismo directorio llamado "text.txt"

const fs = require("fs");

const text = fs.readFileSync("./text.txt", "utf8");

console.log(text);
