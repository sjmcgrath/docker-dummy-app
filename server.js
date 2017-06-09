var express = require('express')
var app = express()

app.get('/healthcheck', function(req, res) {
    res.send('OK')
})

app.listen(process.env.PORT || 3000)
