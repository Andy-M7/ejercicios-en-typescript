class Vehiculo{
    rueda1: Rueda;
    rueda2: Rueda;
    rueda3: Rueda;
    rueda4: Rueda;


    constructor(rueda1:Rueda){
        this.rueda1 = rueda1

    }

    dato(){
        console.log(`Rueda1: ${this.rueda1}  Rueda2: ${this.rueda2}  Rueda3: ${this.rueda3}  Rueda4: ${this.rueda4}`)
    }

}

set vehiculo1 = new Vehiculo(ruedas)

vehiculo1.dato()
