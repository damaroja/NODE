

const Evenmitter = require("events");

const myEmitter = new Evenmitter();

myEmitter.on("event1", () => {
  console.log("event1");
});

myEmitter.on("event2", () => {
  console.log("event2");
});

myEmitter.on("event3", (stock) => {
  myEmitter.emit("event1");
  myEmitter.emit("event2");
  console.log(`There are ${stock} items left in stock.`);
});

myEmitter.emit("event3", 9);
