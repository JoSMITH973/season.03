const http = require('http');
const PORT = process.argv[2];

if (!PORT) {
    console.log("Usage : node e01.js <PORT>")
}

const serveur = http.createServer(function (req,res) {
    res.write('Hello Wolrd!');
    res.end();
});

serveur.listen(PORT, () => {
    console.log("Server started at http://localhost:",PORT);
});
