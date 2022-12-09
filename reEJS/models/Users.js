const mongoose = require('mongoose');
const emailValidator = require('email-validator');

const UsersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username field must to be a string'],
        trim: true,
        unique: true
    },
    slug: String,
    password: {
        type: String,
        required: [true, 'Password field must to be a string'],
        trim: true,
        unique: true,
        mminlength: [6, 'password must be minimum 6 character']
    },
    name: {
        type: String,
        required: [true, 'Name field must to be a string'],
        trim: true,
        unique: true
    },
    surname: {
        type: String,
        required: [true, 'Surname field must to be a string'],
        trim: true,
        unique: true
    },
    email: {
        type: String,
        lowercase: true,
        validate: {
            validator: emailValidator.validate,
            message: (props) => `${props.value} is not a valid email address`
        },
        required: [true, 'Email field must to be a string'],
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'PLease add valid email'
        ],
        trim: true,
        unique: true
    },
    userId: {
        type: Number,
        required: [true, 'User ID field must to be a number'],
        trim: true,
        unique: true,
        maxlength: [11, 'User ID must be 11'],
        minlength: [11, 'Min length must be 11']
    }, 
    
});

module.exports = mongoose.model('User', UsersSchema);