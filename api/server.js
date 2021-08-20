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

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack,
    });
});

module.exports = server