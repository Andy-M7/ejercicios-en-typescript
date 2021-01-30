class Rueda{
    aro: string;
    camara: string;
    caucho: string;
    constructor(aro: string, camara: string, caucho: string){
        this.aro = aro
        this.camara = camara
        this.caucho = caucho
    }

    dato(){
        console.log(`Aro: ${this.aro}, Camara: ${this.camara}, Caucho: ${this.caucho}`)
    }   
}

set ruedas = new Rueda('Metal', '23 X 42', '3 pulgadas')
ruedas.dato()