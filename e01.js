const http = require('http');
const PORT = process.argv[2];

// Perso

http.createServer(function (req,res) {
    res.write('Hello Wolrd!');
    res.end();
}).listen(PORT)

// Correction 

if (!PORT) {
    console.log("Usage : node e01.js <PORT>");
    process.exit(0);
}

const serveur = http.createServer(function (req,res) {
    res.write('Hello Wolrd!');
    res.end();
});

serveur.listen(PORT, () => {
    console.log("Server started at http://localhost:", PORT);
});
