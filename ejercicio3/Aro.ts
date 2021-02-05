class Aro extends Rueda {
    material: String;
    diseno: String;

    constructor(material: string, diseno: string){
        this.material = material
        this.diseno = diseno
    }

    dato(){
        console.log(`Material: ${this.material}, Diseño: ${this.diseno}`)
    }
} 
