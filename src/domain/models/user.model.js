const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    user: {
        type: String,
        required: false,
        unique: true
    },
    fullName: {
        type: String,
        required: false,
        unique: true
    },
    email: {
        type: String,
        required: false,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    dni: {
        type: String,
        required: true,
        unique: true
    },
    photo: {
        type: String,
        required: false,
    },
    CreateAdd: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('User', UserSchema)