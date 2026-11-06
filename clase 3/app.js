class Nodo {
    constructor(letra = null) {
        this.letra = letra
        this.izquierda = null
        this.derecha = null
    }
}



function calcularFrecuencia(palabra) {
    let contados = {}
    for (i = 0; i < palabra.length; i++) {
        let caracter = palabra[i]

        if (caracter in contados) {
            contados[caracter] += 1
        }
        
        if (!(caracter in contados) && caracter !== null) {
            contados[caracter] = 1
        }

    }
    return contados
}

console.log(calcularFrecuencia("hola como esta"))