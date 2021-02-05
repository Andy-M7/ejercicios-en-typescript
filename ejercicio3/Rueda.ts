class Rueda {
    aro: string;
    llanta: string;
    constructor(){
        this.aro = "Acero"
        this.llanta = "llanta"
    }
    dato(){
        console.log(`Aro: ${this.aro}, Llanta: ${this.llanta}`)
    }   

    devolver(){
        return this.aro
    }
}
