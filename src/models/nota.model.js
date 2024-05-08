//import mongoose from "mongoose"
const mongoose = require('mongoose')

const notaSchema = mongoose.Schema({
    id: String,
    nombre: String,
    contenido: String,
    tags: String,
    estado: String,
    fechaFin: Date,
    fechaDeInicio: Date,
    fechaDeRegistro: Date
})

//const nota = mongoose.model('Nota', notaSchema, 'notas')
module.exports = mongoose.model('Nota', notaSchema, 'Notas')