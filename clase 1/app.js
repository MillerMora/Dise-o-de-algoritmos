function conversor_binario(palabra){
let ByTes = new TextEncoder().encode(palabra)
let binario = ""

for (i = 0 ; i < ByTes.length ; i++){
    binario += ByTes[i].toString(2).padStart(8, "0") + " "
}

return binario

}

function palabra_peso(palabra){
    let ByTes = palabra.length
    let bits = ByTes * 8
    let resultado = "Peso de la palabra en bytes y bits\n" + ByTes.toString() + " Bytes\n" + bits.toString() + " bits"
    return resultado
}


console.log(conversor_binario("microsoft"))
console.log(palabra_peso("microsoft"))