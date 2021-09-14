'use strict'

const express = require('express')
const PORT = process.env.PORT || 7000
const api = express()
const debug = require('debug')('AZlabs:index')

api.get('/home', (req, res) => {
    res.status(200).send({ok: true, message:'Welcome to BSG institute Dev Ops Course'})
})

api.listen(PORT, () => {
    debug(`Application is running on port ${PORT}`)
})