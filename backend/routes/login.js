const express = require('express')
const router = express.Router()
const logincontrollers = require('../controllers/login')
const loginvalidators = require('../validators/login')
const validate = require('../validate')

//register
router.post(
    '/register',
    loginvalidators.validation_for_register(),
    validate,
    logincontrollers.register
)

//login
router.post(
    '/login',
    loginvalidators.validation_for_login(),
    validate,
    logincontrollers.login
)

module.exports = router