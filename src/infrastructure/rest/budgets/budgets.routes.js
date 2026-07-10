const express = require('express')
const controller = require('./budgets.controller')
const auth = require('../../middleware/jwt.service')
const router = express.Router()

router.get('/', controller.FindAllBudgets)
router.get('/:id', controller.FindBudgetsById)
router.post('/', controller.CreateBudgets)

module.exports = router;