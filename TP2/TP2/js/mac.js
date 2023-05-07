// MODO ASINCRÓNICO CON CALLBACKS
const fs = require('fs')

function readWriteFileSystemAsync(){
    fs.readFile('./package.json', 'utf-8', (error, contenidoStr) =>{
        if(error) throw Error(`Error en operación asincrónica de lectura: ${error.message}`)

        const contenidoObj = JSON.parse(contenidoStr)
        const size = Buffer.byteLength(contenidoStr, 'utf-8')
        const info = { contenidoStr, contenidoObj, size }

        console.log(info)

        fs.writeFile('info.txt', JSON.stringify(info, null, '\t'), error => {
            if(error) throw Error(`Error en operación asincrónica de escritura: ${error.message}`)
        })          
    })               
}

module.exports = {
    "readWriteFileSystemAsync": readWriteFileSystemAsync
}