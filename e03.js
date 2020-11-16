const http = require('http');
const fs = require('fs');
const PORT = process.argv[2];

if (!PORT) {
    PORT = "4242";
}

const serveur = http.createServer(function (req,res) {
    console.log(req.method);
    file = fs.readFileSync('index.html', 'utf-8')
    res.write(file);
    res.end();
});

serveur.listen(PORT, () => {
    console.log("Server started at http://localhost:",PORT);
});
