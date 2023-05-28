const express = require('express')
const router = express.Router()

//const { register, login, logout, getMe, forgotPassword, resetPassword, updateDetails, updatePassword } = require('../../controllers/auth')
const { register, login } = require('../controllers/doctor')

router.post('/register', register)
router.post('/login', login)

module.exports = router;