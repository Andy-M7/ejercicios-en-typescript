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


    constructor(nombre: string, modelo: string, motor: string, color: string, precio: number, disponible:boolean) {
        this.nombre = nombre
        this.modelo = modelo
        this.motor = motor
        this.color = color
        this.rueda1 = 'blanco'
        this.rueda2 = 'blanco'
        this.rueda3 = 'blanco'
        this.rueda4 = 'blanco'
        this.precio = precio
        this.disponible = disponible
    }

    descripcion() {
        console.log(`Nombre: ${this.nombre}  Modelo: ${this.modelo}  Motor: ${this.motor}`)
        console.log(`Color: ${this.color}`)
        console.log(`Precio: ${this.precio}`)
        console.log(`Color de rueda1: ${this.rueda1}`)
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

    setRueda1(color: string){
        this.rueda1 = color
    }
}

let carro1 = new Carro('Toyota', 'XT234', 'GTX1050', 'Blanco',8000,true)
let carro2 = new Carro('Nissan', 'HG540', 'HTM400', 'Negro',5000,false)

carro1.descripcion()
carro1.stock()
carro1.setRueda1('negro')

carro1.descripcion()
