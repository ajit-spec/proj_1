const mongoose = require('mongoose');
const {Schema} = mongoose;

const userschema = new Schema(
    {
        username: {
            type: String,
            required: [true, 'username is required'],
            unique: true
        },
        email: {
            type: String,
            required: [true, 'email is required'],
            validate: {
                validator: function (v) {
                    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
                },
                message: props => `${props.value} is not a valid email`
            },
            unique: true
        },
        password: {
            type: String,
            required: [true, 'password is required']
        }
    }
);

const User = mongoose.model('User', userschema);

module.exports = User