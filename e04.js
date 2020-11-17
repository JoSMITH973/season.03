const http = require('http');
const querystring = require('querystring');
const url = require('url');
const PORT = process.argv[2] || 4242;

const serveur = http.createServer(function (req,res) {
    let param =  req.url;
    console.log('My request dump :')
    console.log(req.method, String(param));
    // __________________________________Début Partie Perso__________________________________
    
    let conditions = (param.match(/=/g))==0 || (param.match(/=/g))== null  ;
    if (conditions) {
        res.end();
        process.exit('erreur')
    };
    let numLength = param.match(/=/g).length;
    console.log("There are ",numLength,"query parameters")
    param = param.match(/\?(.*)/);
    param = param[1];
    param = querystring.parse(param);
    param = JSON.stringify(param);
    let toVerif = param.match(/"/g).length;
    for (i=0;i<toVerif;i++) {
        param = param.replace('"',''); 
        param = param.replace(',','\n'); 
    }
    param = param.replace('{',''); 
    param = param.replace('}',''); 
    console.log(param);
    console.log('done%');
    res.write('done');
    
   // __________________________________Fin Partie Perso__________________________________
   
   // __________________________________Début Correction__________________________________
    /* 
    const {query} = url.parse(param);
    if(query) {
        const queryObject = querystring.parse(query);
        // console.log(Object.entries(queryObject));
        for (const [key,value] of Object.entries(queryObject)) {
            console.log(`${key} : ${value}`);
        }
        console.log(param);
        console.log('done%');
        res.write('done');
    }
    */
    // __________________________________Fin Correction __________________________________
    res.end();
});


// Correction non intégrée
    // const {query} = url.parse(param);
    // if(query) {
    //     const queryObject = querystring.parse(query);
    //     // console.log(Object.entries(queryObject));
    //     for (const [key,value] of Object.entries(queryObject)) {
    //         console.log(`${key} : ${value}`);
    //     }
    //     console.log(param);
    //     console.log('done%');
    //     res.write('done');
    // }


// Fin Correction

serveur.listen(PORT, () => {
    console.log("Server started at http://localhost:",PORT);
});
