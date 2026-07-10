const express = require('express')
const controller = require('./users.controller')
const router = express.Router()
const auth = require('../../middleware/jwt.service')

router.post('/', controller.CreateUser)
router.get('/', controller.FindAllUsers)
router.get('/:id', controller.FindUserById)
router.put('/:id', controller.UpdateUserById)
router.delete('/:id', controller.DeleteUserById)

module.exports = router;