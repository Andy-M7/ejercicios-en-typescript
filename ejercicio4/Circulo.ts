class Circulo{
    propiedad1: string;
    propiedad2: string;
    constructor(propiedad1: string, propiedad2: string){
        this.propiedad1 = propiedad1
        this.propiedad2 = propiedad2
    }
    dato(){
        console.log(`Propiedad1: ${this.propiedad1}, Propiedad2: ${this.propiedad2}`)
    }
}

let circulo1 = new Circulo('done1','done2');