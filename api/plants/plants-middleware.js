const db = require('../../data/dbConfig')
const Plants = require('./plants-model')

function validateId(req, res, next) {
    const id = req.params.id
    Plants.findById(id)
        .then(plant => {
            if (plant) {
                next()
            } else res.status(404).json({ message: 'no plant found with that id' })
        })
        .catch(err => next(err))

}

function validatePlant(req, res, next) {
    const { name, species, nickname, frequency } = req.body
    if (!name || !species || !nickname || !frequency) {
        res.status(400).json({ message: 'please complete all required fields' })
    } else next()
}

module.exports = {
    validateId,
    validatePlant
}