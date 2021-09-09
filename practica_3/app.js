require('./saludo')

let logGreeting = (miParametro) => miParametro()
//Invoke function on the fly
logGreeting ( function() {
    console.log("hello from a function created on the fly ");
});

//Interpolacion de strings
let logGreeting1= (miNombre, miColor) => {
    console.log("Hola " + miNombre + " buenos dias! Tu color favorito es el " + miColor);
}
logGreeting1("Carlos","azul")




