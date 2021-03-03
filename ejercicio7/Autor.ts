class Autor {
    nombre: string;
    email: string;
    genero: string;

    constructor() {
        this.nombre = "default"
        this.email = "default@gmail.com"
        this.genero = "default"
    }
// Metodo Getter
    getNombre() {
        return this.nombre
    }

    getEmail() {
        return this.email
    }

    getGenero(){
        return this.genero
    }

// Metodo Setter
    setNombre(nombre: string) {
        this.nombre = nombre
    }

    setEmail(email: string) {
        this.email = email
    }

    setGenero(genero: string) {
        if (genero == "M") {
            this.genero = `(${genero})`
        }
        if (genero == "F") {
            this.genero = `(${genero})`
        }
    }

    toString() {
        return `${this.nombre} ${this.genero} en ${this.email}` 
    }
}

let autor = new Autor()
autor.setNombre("Andy")
autor.setGenero("M")
autor.setEmail("Apariguana@gmail.com")
console.log(autor.toString())