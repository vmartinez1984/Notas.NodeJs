//rutas para la nota
// import notaController from '../controllers/nota.controller.js'
// import express from 'express'

const express = require('express')
const notaController = require('../controllers/nota.controller.js')

const router = express.Router()

router.post("/", notaController.agregar)

router.get("/", notaController.obtenerTodos)

router.put("/:id", notaController.actualizar)

module.exports = router