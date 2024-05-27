const router = require('express').Router()
const controller = require('./controllers/getTop10.controller')
module.exports = router.get('/get-top-ten', controller)