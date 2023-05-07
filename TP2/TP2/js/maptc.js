// MODO ASINCRÓNICO CON PROMISES (SINTAXIS THEN-CHATCH)
const fs = require('fs')

function readWriteFileSystemAsyncPromiseThenCatch(){
    fs.promises.readFile("./package.json", "utf-8")
        .then(contenidoStr => {
            const contenidoObj = JSON.parse(contenidoStr)
            const size = Buffer.byteLength(contenidoStr, 'utf-8')
            const info = { contenidoStr, contenidoObj, size }

            console.log(info)

            return fs.promises.writeFile('info.txt', JSON.stringify(info, null, '\t'))
        })
        .catch(error => { console.log(`Error en operación sincrónica de lectura/escritura: ${error.mesagge}`) })
}

module.exports = {
    "readWriteFileSystemAsyncPromiseThenCatch": readWriteFileSystemAsyncPromiseThenCatch
}