function Greet3 () {
    this.greeting = "Hola desde la funcion de contructor";
    this.greet = function () {
        console.log(this.greeting);
    }
}

module.exports = new Greet3