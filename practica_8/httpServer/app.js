var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/plain'});
    res.end('Hola mundo')
}).listen(1337,'127.0.0.1')

//Aparece el hola mundo y el tipo de contenido que le asignamos en el writeHead