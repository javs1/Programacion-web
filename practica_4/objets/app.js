let persona = {
    nombre: "Francisco",
    apellido: "Vargas",
    getName: function () {
        return `${this.nombre} ${this.apellido}`
    },
    domicilio:{
        calle: "Jacinto #737",
        colonia: "Villas",
        cp: 28080,
        municipio: 'colima'
    },
    getAddress: function () {
        return `${this.domicilio.calle} Colonia: ${this.domicilio.colonia}, CP: ${this.domicilio.cp}, Municipio: ${this.domicilio.municipio} `
    }
};
console.log(persona.getName());
console.log(persona.getAddress());