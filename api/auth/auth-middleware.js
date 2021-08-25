const Users = require('../users/users-model')
const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWT_SECRET

function validate(req, res, next) {
    const { username, password } = req.body;

    const valid = Boolean(username && password && typeof password === "string")

    if (valid) {
        next()
    } else {
        res.status(401).json({
            message: 'username and password required'
        })
    }
}

function checkUsername(req, res, next) {
    let { username } = req.body;
    Users.findBy({ username })
        .then(user => {
            if (user[0]) {
                res.status(406).json('username taken')
            } else {
                next()
            }
        })
        .catch(err => next(err))
}

function checkPhone(req, res, next) {
    Users.findBy(req.body.phone)
        .then(user => {
            if (user) {
                res.status(400).json({ message: 'phone number already used' })
            } else next()
        })
        .catch(err => next(err))
}

function restricted(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return next({ status: 401, message: 'No token??' });
    }

    jwt.verify(token, jwtSecret, (err, decodedToken) => {
        if (err) {
            return next({ status: 401, message: 'Invalid token!' });
        }

        req.decodedToken = decodedToken;
        next();
    });
};


module.exports = {
    validate,
    checkUsername,
    checkPhone,
    restricted
}