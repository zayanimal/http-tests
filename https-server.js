const express = require('express');
const app = express()
const https = require('https')
const fs = require('fs')
const PORT = 3000

app.get('/', (req, res) => {
    res.send('Now using https')
})


https.createServer({
    key: fs.readFileSync('./certs/localhost/localhost.decrypted.key'),
    cert: fs.readFileSync('./certs/localhost/localhost.crt')
}, app).listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
});
