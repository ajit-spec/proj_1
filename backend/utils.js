require('dotenv').config()
const jwt = require('jsonwebtoken')

//generate_token
const generate_token = async (data) => {
    return await jwt.sign(
        data,
        process.env.JWT_ACCESS_TOKEN_SECRET
    )
}

//verify_token
const verify_token = async (token) => {
    return await jwt.verify(
        token,
        process.env.JWT_ACCESS_TOKEN_SECRET
    )
}

module.exports = {
    generate_token,
    verify_token
}