class ComvertidorDeTemperatura {
    fahrenheit: number;
    celsius: number;
    
    constructor(valor:number) {
        this.celsius = valor
        this.fahrenheit = valor
    }
    
    convertCelsius() {
        return (this.fahrenheit -32) * 5/9
    }
    convertFahrenheit() {
        return (this.celsius * 9/5) + 32
    }
}

let operacion1 = new ComvertidorDeTemperatura(10).convertCelsius()
let operacion2 = new ComvertidorDeTemperatura(10).convertFahrenheit()
console.log(operacion1)
console.log(operacion2)