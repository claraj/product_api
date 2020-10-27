let express = require('express')
let bodyParser = require('body-parser')
let products_api = require('./routes/products.js')

let app = express() 

app.use(express.static('public'))

app.use(bodyParser.json())

app.use('/api', products_api)

// Error handlers - for not found, and app errors 
app.use(function(req, res, next){
    res.status(404).send('Not found')
})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Server error')
  })

// Start server running 
var server = app.listen(process.env.PORT || 3000, function() {
    console.log('app running on port', server.address().port)
})