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
    let kiloBytes = ByTes / 1000
    let MegaBytes = kiloBytes / 1000
    let resultado = "Peso de la palabra en diferentes formatos \n" + ByTes.toString() + " Bytes\n" + bits.toString() + " bits\n" + kiloBytes.toString() + " KiloBytes\n" + MegaBytes.toString() +" MegaBytes\n"
    return resultado
}

console.log(palabra_peso("Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laboriosam excepturi quas nemo provident minus deleniti voluptate ex blanditiis consequatur dicta laborum pariatur accusamus distinctio, voluptatum fuga repellendus iste ullam?"))