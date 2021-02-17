export class Vehiculo {
    modelo: string;
    tipo: string;
    fabricante: string;
    color: string;
    rueda: boolean;
    constructor(modelo: string, fabricante: string) {
        this.modelo = modelo
        this.fabricante = fabricante
        this.tipo = 'Default'
        this.color = 'black'
        this.rueda = true
    }
    setColor(pintar: string) {
        this.color = pintar
        return this.color
    }
    info(){
        let vehiculoInfo: string = `[Modelo: ${this.modelo}, Fabricante: ${this.fabricante}, Color: ${this.color}]`
        return vehiculoInfo
    }
}
