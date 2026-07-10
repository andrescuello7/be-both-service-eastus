const mongoose = require('mongoose')

const TransactionSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
        trim: true
    },
    amount: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: String,
        default: () => new Date().toISOString().replace(/\.\d{3}Z$/, 'Z'),
        trim: true
    },
    category_id: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        trim: true
    },
})

module.exports = mongoose.model('Transaction', TransactionSchema)