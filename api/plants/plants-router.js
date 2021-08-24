const express = require('express')
const Plants = require('./plants-model')
const router = express.Router()

const { validateId, validatePlant } = require('./plants-middleware')
const { restricted } = require('../auth/auth-middleware')

router.get('/', async(req, res) => {
    const plants = await Plants.find()
    res.json(plants)
})

router.get('/:id', validateId, async(req, res) => {
    const plant = await Plants.findById(req.params.id)
    res.json(plant)
})

router.delete('/:id', restricted, validateId, (req, res, next) => {
    Plants.remove(req.params.id)
        .then(deleted => {
            res.json({
                deleted
            })
        })
        .catch(err => next(err))
})

router.put('/:id', restricted, validateId, validatePlant, (req, res, next) => {
    Plants.update(req.params.id, req.body)
        .then(updated => {
            res.json(updated)
        })
        .catch(err => next(err))
})

router.post('/', restricted, validatePlant, (req, res, next) => {
    Plants.add(req.body)
        .then(plant => res.status(201).json(plant))
        .catch(err => next(err))
})

module.exports = router