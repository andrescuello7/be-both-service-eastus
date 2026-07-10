const express = require('express')
const controller = require('./transactions.controller')
const auth = require('../../middleware/jwt.service')
const router = express.Router()

router.get('/', controller.FindAllTransactions)
router.get('/:id', controller.FindTransactionsById)
router.post('/', controller.CreateTransaction)
router.put('/:id', controller.UpdateTransaction)
router.delete('/:id', controller.DeleteTransaction)

module.exports = router;