//import nota from '../models/nota.model.js'
const Nota = require('../models/nota.model.js')

exports.agregar = async (request, response) => {
    try {
        const nota = new Nota(request.body)
        const notaNew = await nota.save()

        response.status(201).json({ _id: nota._id })
    } catch (error) {
        console.log(error)
        response.status(500).json({ mensaje: 'Valio pepino' })
    }
}

exports.obtenerTodos = async (request, response) => {
    try {
        const lista = await Nota.find()

        response.status(200).json(lista)
    } catch (error) {
        console.log(error)
        response.status(500).json({ mensaje: 'Valio pepino' })
    }
}

exports.actualizar = async (request, response) => {
    try{
        let nota

        const { id } = request.params
        nota = await Nota.findOne({ id: id })
        nota.nombre = request.body.nombre || nota.nombre
        nota.contenido = request.body.contenido || nota.contenido
        nota.tags = request.body.tags || nota.tags
        nota.estado = request.body.estado || nota.estado
        nota.fechaFin = request.body.fechaFin || nota.fechaFin
        nota.fechaDeInicio = request.body.fechaDeInicio || nota.fechaDeInicio

        const notaUpdate = await nota.save()

        response.status(204).json({ mensaje: "Datos actualizados" })
    } catch (error) {
        console.log(error)
        response.status(500).json({ mensaje: 'Valio pepino' })
    }
}