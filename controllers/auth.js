const User = require('../models/User')

module.exports.login = (req, res) => {
    res.status(200).json({
        login: {
            email: req.body.email,
            password: req.body.password
        }
    })
}

module.exports.register = (req, res) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password
    })

    user.save().then(() => console.log('User created')).catch(err => console.log(err))
}