const express = require('express')
const controller = require('./auth.controller')
const auth = require('../../middleware/jwt.service')
const router = express.Router()

router.get('/', auth, controller.FindUserByToken)
router.post('/', controller.AuthUser)

module.exports = router;