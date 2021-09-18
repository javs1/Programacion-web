let greet = require('./greet1');
let greet2 = require('./greet2').greet;
let greet3b = require('./greet3');
const greet3 = require('./greet3');
const {greeting} = require('./greet3');
const Greet4 = require('./greet4');
let myGreet = new(Greet4);

greet();

greet2();

console.log(greet3);
greet3.greet();

greet3.greeting= "Hola desde la app";
greet3b.greet();

myGreet.greet();
