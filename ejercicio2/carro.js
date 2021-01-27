var rueda = 'default'; // para completar mas rapido los datos de las ruedas
var Carro = /** @class */ (function () {
    function Carro(nombre, modelo, motor, color, precio, disponible) {
        this.nombre = nombre;
        this.modelo = modelo;
        this.motor = motor;
        this.color = color;
        this.rueda1 = 'blanco';
        this.rueda2 = 'blanco';
        this.rueda3 = 'blanco';
        this.rueda4 = 'blanco';
        this.precio = precio;
        this.disponible = disponible;
    }
    Carro.prototype.descripcion = function () {
        console.log("Nombre: " + this.nombre + "  Modelo: " + this.modelo + "  Motor: " + this.motor);
        console.log("Color: " + this.color);
        console.log("Precio: " + this.precio);
        console.log("Color de rueda1: " + this.rueda1);
    };
    Carro.prototype.stock = function () {
        if (this.disponible == true) {
            console.log('disponible');
            console.log(''); // Para dar espacio entre objetos en la consola
        }
        else {
            console.log('agotado');
            console.log(''); // Para dar espacio entre objetos en la consola
        }
    };
    Carro.prototype.setRueda1 = function (color) {
        this.rueda1 = color;
    };
    return Carro;
}());
var carro1 = new Carro('Toyota', 'XT234', 'GTX1050', 'Blanco', 8000, true);
var carro2 = new Carro('Nissan', 'HG540', 'HTM400', 'Negro', 5000, false);
carro1.descripcion();
carro1.stock();
carro1.setRueda1('negro');
carro1.descripcion();
