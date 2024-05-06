

//Hay que tener una archivo de texto en el mismo directorio llamado "text.txt"

const fs = require("fs");

const text = fs.readFileSync("./text.txt", "utf8");
const text2 = "Hora es 78"

console.log(text);

fs.writeFileSync("./text.txt", text2)
