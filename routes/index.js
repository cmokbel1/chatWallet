const router = require('express').Router()

router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./roomRoutes.js'))

module.exports = router
