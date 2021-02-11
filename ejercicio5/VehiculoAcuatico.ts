import {Vehiculo} from './Vehiculo'

export class VehiculoAcuatico extends Vehiculo{
    constructor(fabricante: string, modelo: string){
        super(fabricante, modelo)
        this.tipo = 'Bote'
        this.rueda = false
    }
}