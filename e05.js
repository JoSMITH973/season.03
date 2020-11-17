const { write } = require('fs');
const http = require('http');
const querystring = require('querystring');
const url = require('url');
const PORT = process.argv[2] || 4242;

const serveur = http.createServer(function (req,res) {
    let param =  req.headers;
    console.log('My request headers dump :');
    res.write('done');
        console.log('host :',req.headers.host);
        console.log('user-agent :',req.headers["user-agent"]);
        console.log('accept :',req.headers.accept);
        console.log('done%');
        res.write('done');
    res.end();
});

serveur.listen(PORT, () => {
    console.log("Server started at http://localhost:",PORT);
});