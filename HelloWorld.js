var express = require('express')
var app = express()

app.get('/', function(req, res) {
    res.sendfile('index.html')
})

app.get('/test', function(req, res) {
    res.send('TEST!')
})

app.listen(5000, function () {
    console.log('Example app listening on port 5000')
})