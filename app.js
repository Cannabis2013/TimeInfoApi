const express = require('express')
const app = express()
const port = 80

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})

const htmlOptions = {}

app.get('/',(req,res) => {    
    return res.sendFile("./views/index.html",htmlOptions)
})

module.exports = app