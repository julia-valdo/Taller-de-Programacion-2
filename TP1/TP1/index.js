const { log } = require('console')
const fs = require('fs')

function leerArchivoComoString(ruta) {
    return fs.readFileSync(ruta, 'utf8')
}

function escribirTextoEnArchivo(ruta, texto, flag) {
    if(fs.existsSync(ruta) || flag) {
        fs.writeFileSync(ruta, texto)
        console.log("Operación de escritura OK!")
    }
    else {
        throw new Error("El archivo no existe!")
    }
}

function transformarStringEnArrayDeNumeros(texto, separador) {
    const partes = texto.split(separador)
    const partesSinNaN = partes.filter(p => !isNaN(Number(p)))
    const numeros = partesSinNaN.map(p => Number(p))

    return numeros
}

function transformarArrayDeNumerosAUnSoloString(array, separador) {
    return array.join(separador)
}

function combinarDosArrays(array1, array2) {
    const arraysCombinados = array1.concat(array2)
    return arraysCombinados.sort(function(a, b){return a - b})
}

function combinarNArrays(arrays) {
    const resultado = arrays.reduce(function(array1, array2) {
        return combinarDosArrays(array1, array2)
    })        
    return resultado
}

module.exports = {
    "leerArchivoComoString": leerArchivoComoString,
    "escribirTextoEnArchivo": escribirTextoEnArchivo,
    "transformarStringEnArrayDeNumeros": transformarStringEnArrayDeNumeros,
    "transformarArrayDeNumerosAUnSoloString": transformarArrayDeNumerosAUnSoloString,
    "combinarDosArrays": combinarDosArrays,
    "combinarNArrays": combinarNArrays
}