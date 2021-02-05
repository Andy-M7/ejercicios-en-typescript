class Vehiculo{
    rueda1: Rueda;
    rueda2: string;
    rueda3: string;
    rueda4: string;
    constructor(rueda1:Rueda){
        this.rueda1 = rueda1
        this.rueda2 = "rueda2"
        this.rueda3 = "rueda3"
        this.rueda4 = "rueda4"
    }
    dato(){
        console.log(`Rueda1: ${this.rueda1}  Rueda2: ${this.rueda2}  Rueda3: ${this.rueda3}  Rueda4: ${this.rueda4}`)
    }
}

let carro1 = new Vehiculo()
carro1.dato()

