var rueda = 'default' // para completar mas rapido los datos de las ruedas
class Carro{
    nombre: string;
    modelo: string;
    motor: string;
    color: string;
    rueda1: string;
    rueda2: string;
    rueda3: string;
    rueda4: string;
    puerta1: string;
    puerta2: string;
    puerta3: string;
    puerta4: string;
    asiento1: boolean;
    asiento2: boolean;
    asiento3: boolean;
    asiento4: boolean;
    disponible: boolean;
    precio: number;
    conductor: string;
    persona: string;


    constructor(nombre: string, modelo: string, motor: string, color: string, rueda1: string, rueda2: string, rueda3: string, rueda4: string, precio: number, disponible:boolean) {
        this.nombre = nombre
        this.modelo = modelo
        this.motor = motor
        this.color = color
        this.rueda1 = rueda1
        this.rueda2 = rueda2
        this.rueda3 = rueda3
        this.rueda4 = rueda4
        this.precio = precio
        this.disponible = disponible
    }

    descripcion() {
        console.log(`Nombre: ${this.nombre}  Modelo: ${this.modelo}  Motor: ${this.motor}`)
        console.log(`Color: ${this.color}`)
        console.log(`Precio: ${this.precio}`)
    }

    stock() {
        if(this.disponible == true) {
            console.log('disponible')
            console.log('') // Para dar espacio entre objetos en la consola
        }
        else{
            console.log('agotado')
            console.log('') // Para dar espacio entre objetos en la consola
        }
    }
}

let carro1 = new Carro('Toyota', 'XT234', 'GTX1050', 'Blanco',rueda,rueda,rueda,rueda,8000,true)
let carro2 = new Carro('Nissan', 'HG540', 'HTM400', 'Negro',rueda,rueda,rueda,rueda,5000,false)

carro1.descripcion()
carro1.stock()

carro2.descripcion()
carro2.stock();