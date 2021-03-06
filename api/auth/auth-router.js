const express = require('express')

const router = express.Router()

const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
const Users = require('../users/users-model')
const jwtSecret = process.env.JWT_SECRET

const { validate, checkUsername, checkPhone } = require('./auth-middleware')

router.post('/register', validate, checkUsername, checkPhone, (req, res, next) => {

    let user = req.body;
    const rounds = process.env.BCRYPT_ROUNDS || 8
    const hash = bcrypt.hashSync(user.password, rounds)

    user.password = hash

    Users.add(user)
        .then(saved => {
            console.log('saved: ', saved)
            res.status(201).json({ id: saved.userId, username: saved.username, phone: saved.phone })
        })
        .catch(err => next(err))
})




router.post('/login', validate, (req, res, next) => {

    let { username, password } = req.body
    Users.findBy({ username })
        .then(([user]) => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = makeToken(user)
                res.status(200).json({
                    message: `welcome, ${user.username}!`,
                    token,

                    loggedUser: {
                        userId: user.userId,
                        username: user.username,
                        phone: user.phone
                    }
                })
            } else {
                res.status(401).json({ message: 'invalid credentials' })
            }
        })
        .catch(err => next(err))
})

function makeToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
    }
    const options = {
        expiresIn: "20m"
    }
    return jwt.sign(payload, jwtSecret, options)
}

module.exports = router