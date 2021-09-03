let saludo = () => console.log('Holis');

saludo(); //saludo, yo te invoco

let logSaludo = (fn) => fn();
logSaludo(saludo); //invocando saludo como parametro de otra una funcion y haciendo que este parametro cuente como una funcion

//nose
let saludaMe = () => console.log('Hola desde saludaMe')
saludaMe();

logSaludo(saludaMe);