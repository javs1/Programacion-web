const Emitter = require("./emitter")

var emtr = new Emitter();

emtr.on('greet', () => {
    console.log('Alguien dijo hola')
});

emtr.on('greet', () => {
    console.log('Ha ocurrido un salludo')
});

console.log('Hola!');
emtr.emit('greet');//Se activan las 2 funciones de greet y de hace un log cada una

emtr.on('jump', () => {
    console.log('Alguien salto');
})

console.log(emtr)
emtr.emit('jump')//Se hace un log de el contructor y se hace otro de la funcion jump