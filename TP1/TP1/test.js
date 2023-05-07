const { leerArchivoComoString, escribirTextoEnArchivo, transformarStringEnArrayDeNumeros, transformarArrayDeNumerosAUnSoloString, combinarDosArrays, combinarNArrays } = require('./index')

console.log('\x1b[32m','------------------ leerArchivoComoString -------------------', '\x1b[0m')
const contenido = leerArchivoComoString('texto.txt')
console.log(contenido)

console.log('\x1b[32m','------------------ escribirTextoEnArchivo ------------------', '\x1b[0m')
escribirTextoEnArchivo('texto.txt', 'Hola, mundo!', false)
//escribirTextoEnArchivo('nuevo.txt', 'Hola, mundo!', false)
escribirTextoEnArchivo('nuevo.txt', 'Hola, mundo!', true)

console.log('\x1b[32m','------------ transformarStringEnArrayDeNumeros -------------', '\x1b[0m')
let array = '123 | 456 | 789 | 1bc | 10'
let separador = ' | '
console.log(transformarStringEnArrayDeNumeros(array, separador))

console.log('\x1b[32m','---------- transformarArrayDeNumerosAUnSoloString ----------', '\x1b[0m')
array = [123, 456, 789, 10]
separador = ','
console.log(transformarArrayDeNumerosAUnSoloString(array, separador))

console.log('\x1b[32m','-------------------- combinarDosArrays ---------------------', '\x1b[0m')
let array1 = [1, 5, 10]
let array2 = [2, 3, 8, 11]
console.log(combinarDosArrays(array1, array2))

console.log('\x1b[32m','--------------------- combinarNArrays ----------------------', '\x1b[0m')
let arrays = [ [1, 10], [2, 3, 15, 16], [4], [6, 7, 13] ]
console.log(combinarNArrays(arrays))