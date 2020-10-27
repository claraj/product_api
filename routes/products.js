let express = require('express')
let products = require('./data.js')

let router = express.Router()

router.get('/products', function(req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*')
    return res.json(products)

})


module.exports = router