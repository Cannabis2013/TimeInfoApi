const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})

app.get('/',(req,res) => {
    return res.sendFile(__dirname + "/views/index.html")
})

module.exports = app