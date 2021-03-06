'use strict'

const express = require('express')
const PORT = process.env.PORT || 7000
const api = express()
const debug = require('debug')('AZlabs:index')

api.get('/home', (req, res) => {
    res.status(200).send({ok: true, message:'Welcome to BSG institute Dev Ops Course'})
})

api.all('*', (req, res) => {
    res.status(404).send({ok:false, message: 'Resource could not be found'})
})

api.listen(PORT, () => {
    debug(`Application is running on port ${PORT}`)
})