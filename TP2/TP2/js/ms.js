// MODO SINCRÓNICO
const fs = require('fs')

function readWriteFileSystemSync(){
    try {
        const contenidoStr = fs.readFileSync('./package.json', 'utf-8')
        const contenidoObj = JSON.parse(contenidoStr)
        const size = Buffer.byteLength(contenidoStr, 'utf-8')
        const info = { contenidoStr, contenidoObj, size }

        console.log(info)

        fs.writeFileSync('info.txt', JSON.stringify(info, null, '\t'))        
    } catch (error) {
        console.log(`Error en operación sincrónica de lectura/escritura: ${error.mesagge}`)
    }    
}

module.exports = {
    "readWriteFileSystemSync": readWriteFileSystemSync
}