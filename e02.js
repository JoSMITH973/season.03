const http = require('http');
const PORT = process.argv[2];

if (!PORT) {
    console.log("Usage : node e01.js <PORT>")
    process.exit(0);
}

const serveur = http.createServer(function (req,res) {
    console.log(req.method);
    if(req.method == "GET") {
        res.write('Hello Wolrd!');
    }
    if(req.method == "POST") {
        res.write('Heisenberg');
    }
    res.end();
});

serveur.listen(PORT, () => {
    console.log("Server started at http://localhost:",PORT);
});
