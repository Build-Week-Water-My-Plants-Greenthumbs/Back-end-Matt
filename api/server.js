const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

const authRouter = require('./auth/auth-router')
const plantsRouter = require('./plants/plants-router')
const usersRouter = require('./users/users-router')

const server = express()

server.use(cors())
server.use(helmet())
server.use(morgan('combined'))
server.use(express.json())

server.use('/api/auth', authRouter)
server.use('/api/plants', plantsRouter)
server.use('/api/users', usersRouter)

module.exports = server