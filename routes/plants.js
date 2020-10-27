var express = require('express')
var products = require('./data.js')

var router = express.Router()

router.get('/products', function(req, res, next) {
    return res.json(products)

})


module.exports = router