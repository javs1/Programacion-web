var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname+'/public'));
app.use('/', function(req,res,next){
    console.log('Request Url:'+req.url)
    next();
})

app.get('/', function(req,res){
    res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet></head><body><h1>Hola mundo!</h1></body></html>'); //Se crea un HTML con el mensaje h1 de 'Hola mundo!'
});

app.get('/api', function(req,res){
    res.json({firstname:'Francisco', lasname:'Vargas'}); //Se crea un JSON con los datos introducidos en el array
});

app.get('/person/:id', function(req,res){
    res.send('<html><head></head><body><h1>Persona: '+ req.params.id +' </h1></body></html>'); //Se crea un HTML cone el nombre de la persona que ponemos en el URL
});

app.listen(port);
