const express = require('express')

const { restricted } = require('../auth/auth-middleware')
const Users = require('./users-model')

const router = express.Router()

router.put('/:id', restricted, (req, res, next) => {
    Users.update(req.params.id, req.body)
        .then(updated => {
            res.json(updated)
        })
        .catch(err => next(err))
})

module.exports = router