const http = require('http');
const PORT = process.argv[2];

if (!PORT) {
    console.log("Usage : node e01.js <PORT>");
    process.exit(0);
}

http.createServer(function (req,res) {
    res.write('Hello Wolrd!');
    res.end();
}).listen(PORT)