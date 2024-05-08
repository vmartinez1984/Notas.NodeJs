// import express from 'express';
// import cors from 'cors'
// import notaRoute from './routes/nota.routes.js'

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const notaRoute = require('./routes/nota.routes')
require('dotenv').config()

try {
    mongoose.connect(process.env.DATABASE_URL, { dbName: process.env.MONGO_DB })
    const database = mongoose.connection
    database.on('error', (error) => {
        console.log(error)
    })
    database.on('connected', () => {
        console.log('Conexión a la Db exitosa')
    })
} catch (error) {
    console.log(error)
}

const app = express();

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3025;

app.get('/', async (req, res) => {
    res.json({ status: true, message: "Our node.js app works" })
});

app.use('/api/notas', notaRoute)

app.listen(PORT, () => console.log(`http://127.0.0.1:${PORT}`));