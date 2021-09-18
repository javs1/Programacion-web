module.exports = function Greet4() {
    this.greeting = "Hola desde la funcion contructor greet4";
    this.greet = function () {
        console.log(this.greeting);
    }
}