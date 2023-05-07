const express = require('express')

const libros = [
    { id: 1, nombre: 'Alicia en el País de las Maravillas' },
    { id: 2, nombre: 'Don QUijote de la Mancha' },
    { id: 3, nombre: 'El Código Da Vinci' }
]

const app = express()
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/libros/:id?', (req, res) => {   
    const { id } = req.params

    if(id) {
        const libro = libros.find( l => l.id == id)
        res.json(libro || {})
    }
    else {
        res.json(libros)
    }    
})

app.post('/libros', (req, res) => {
    const libro = req.body
    libro.id = (libros[libros.length - 1]?.id || 0) + 1

    libros.push(libro)

    res.json(libro)
})

app.put('/libros/:id', (req, res) => {
    const id = Number(req.params.id)
    const libro = req.body    
    libro.id = id
    const indice = libros.findIndex(p => p.id === id)
    
    if (indice != -1){                
        const pAnterior = libros[indice]
        const pNuevo = { ...pAnterior, ...libro }
        libros.splice(indice, 1, pNuevo)
        res.json(pNuevo)
    }
    else {
        libros.push(libro)
        res.json(libro)
    }    
})

app.delete('/libros/:id', (req, res) => {
    const { id } = req.params
    let libro = {}
    const indice = libros.findIndex(p => p.id == id)
    
    if (indice != -1){
        libro = libros.splice(indice, 1)
    }

    res.json(libro)
})

const port = 8080
const server = app.listen(port, 
    () => console.log(`Servidor HTTP Express escuchando en http://localhost:${port}`))

server.on('error', error => console.log(`Error en servidor: ${error.message}`))