var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, edad, altura, colorPiel) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.altura = altura;
        this.colorPiel = colorPiel;
    }
    Persona.prototype.dato = function () {
        console.log("Nombre: " + this.nombre);
        console.log("Apellido: " + this.apellido);
        console.log("Edad: " + this.edad);
    };
    return Persona;
}());
var persona1 = new Persona("Juan", "Torres", 20, 1.75, "morena");
persona1.dato();
