const {body} = require('express-validator');
const User = require('../models/user')

const validation_for_register = () => {
    return [
        body('username').notEmpty().withMessage('username is required').bail()
            .custom(async (value, {req}) => {
                if (await User.findOne({username: value})) {
                    throw new Error(`username already exist`)
                }
                return true
            }),
        body('email').notEmpty().withMessage('email is required').bail()
            .isEmail().withMessage('email is not valid'),
        body('password').notEmpty().withMessage('password is required').bail()
            .custom((value, {req}) => {
                const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/
                if (!regex.test(value)) {
                    throw new Error(`password must be min 8 characters long, uppercase, lowercase, digit and special character mandatory`)
                }
                return true
            })

    ]
}

const validation_for_login = () => {
    return [
        body('username').notEmpty().withMessage('username is required'),
        body('password').notEmpty().withMessage('password is required')

    ]
}

module.exports = {
    validation_for_register,
    validation_for_login
}