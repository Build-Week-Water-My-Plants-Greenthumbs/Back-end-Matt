const Users = require('../users/users-model')

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
        .catch(next)
}

module.exports = {
    validate,
    checkUsername
}