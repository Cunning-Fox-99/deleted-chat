const express = require('express')
const {connectToDb, getDb} = require('./db')



const PORT = 3000

const app = express()
app.use(express.json())
let db

connectToDb((err) => {
    if (!err) {
        app.listen(PORT || 9001, (err) => {
            err ? console.log(err) : console.log('Server start')
        })
        db = getDb()
    } else {
        console.log(`Error: ${err}`)
    }
})

app.post('/chats', (req, res) => {
db
    .insertOne(req.body)
    .then((result) => {
        res.status(201).json(result)
    })
    .catch()
})

