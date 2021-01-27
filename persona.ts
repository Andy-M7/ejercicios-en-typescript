class Persona{
    nombre:string;
    apellido:string
    edad:number;
    altura:number;
    colorPiel:string;

    constructor(nombre:string, apellido:string, edad:number, altura:number, colorPiel:string){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.altura = altura
        this.colorPiel = colorPiel
    }

    dato(){
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Apellido: ${this.apellido}`)
        console.log(`Edad: ${this.edad}`)
    }
}

let persona1 = new Persona("Juan","Torres",20,1.75,"morena")
persona1.dato()