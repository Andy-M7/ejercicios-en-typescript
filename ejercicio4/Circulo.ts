class Circulo {
    radio: number;
    color: string;

    constructor(radio?: number) {  // Constructor con parametro Radio
        this.radio = radio
        this.color = 'White'      // Color por defecto
    }

    getRadio(): number {
        return this.radio
    }

    getArea(): number {
        return 3.14 * this.radio * this.radio;  // Calculando Area
    }
}

// Creando objeto
let redondo = new Circulo(2)
console.log(redondo.getArea())