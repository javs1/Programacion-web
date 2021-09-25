let persona = {
    nombre: 'Francisco',
    edad: 20,
    apellido: 'Vargas',
    keypress: function(){
        console.log('Se ha pulsado una tecla')
    },
    mouseOver: function(){
        console.log('El cursor esta encima')
    }
}

console.log(persona.nombre);
console.log(persona['nombre']);//comenta el nombre 2 veces

let myKey = 'nombre';
console.log(persona[myKey]); //Lo mismo que (persona['nombre'])

myKey = 'keypress';
console.log(persona[myKey]())//Llama la funcion keypress
myKey = 'mouseOver';
console.log(persona[myKey]())//Lamma la funcion mouseOver

let myArray = [];

myArray.push(4);
myArray.push('cadena');
myArray.push(persona);
myArray.push(saludo = function() {  
    console.log('Hola desde el array');
})
console.log(myArray);//Hace un log de el array con los push agregados pero sin el contenido de la funcion
console.log(myArray[saludo()]);//Hace log de el cotenido de la funcion saludo

let funcArray = [];

funcArray.push(()=>{
    console.log("Funcion 1")
})
funcArray.push(()=>{
    console.log("Funcion 2")
})
funcArray.push(()=>{
    console.log("Funcion 3")
})

funcArray.forEach((item)=>{
    item();
})//Se hace un log de los contenidos de cada funcion