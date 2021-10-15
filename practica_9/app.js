const express = require('express');
const app = express();

app.get('/', (req,res)=>{ //route handler
    res.send('Hola mundo, ruta de ROOT');
})
app.listen(3000);

app.get('/uno', (req,res)=>{ //route handler
    res.send('Hola mundo, ruta UNO');
})

app.get('/dos', (req,res)=>{ //route handler
    res.send('Hola mundo, ruta DOS');
})

app.get('/prueba', (req,res)=>{ //route handler
    res.send('Hola mundo, ruta PRUEBA');
})