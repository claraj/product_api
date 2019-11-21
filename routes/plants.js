var express = require('express')
var plantData = require('./data.js')

var router = express.Router()

router.get('/plants/:name', function(req, res, next) {
    
    plant = plantData.filter( plant => plant.name === req.params.name)
    if (plant) {
        return res.json(plant)
    }
    else {
        return res.status(404)
    }
})


module.exports = router