// // MODO ASINCRÓNICO CON PROMISES (SINTAXIS ASYNC-AWAIT)
const fs = require('fs')

async function readWriteFileSystemAsyncPromiseAsyncAwait(){
    try {
        const contenidoStr = await fs.promises.readFile('./package.json', 'utf-8')
        const contenidoObj = JSON.parse(contenidoStr)
        const size = Buffer.byteLength(contenidoStr, 'utf-8')
        const info = { contenidoStr, contenidoObj, size }
        
        console.log(info)

        await fs.promises.writeFile('info.txt', JSON.stringify(info, null, '\t'))
    } catch (error) {
        console.log(`Error en operación sincrónica de lectura/escritura: ${error.mesagge}`)
    }    
}

module.exports = {
    "readWriteFileSystemAsyncPromiseAsyncAwait": readWriteFileSystemAsyncPromiseAsyncAwait
}