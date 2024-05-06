//Non-blocking asynchronous way

fs.readFile("./text.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});
console.log('dsasdad');
