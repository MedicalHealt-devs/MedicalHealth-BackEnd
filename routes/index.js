const express = require('express')
const router = express.Router();

const doctorRoutes = require('./doctor')

router.use('/doctor', doctorRoutes)

module.exports = router;