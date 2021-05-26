const express = require('express')
const axios = require('axios')
const users = require('./src')
const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const userHandler = users({axios})

app.get('/', userHandler.get)
app.post('/', userHandler.post)
app.put('/:id', userHandler.put)
app.delete('/:id', userHandler.delete)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

