const {MongoClient} = require('mongodb')


const URL = 'mongodb+srv://admin:admin@cluster0.px3lfse.mongodb.net/?retryWrites=true&w=majority'

let dbConnection

module.exports = {
    connectToDb: (cb) => {
        MongoClient
            .connect(URL)
            .then((client) => {
                console.log('Connected to MongoDB')
                dbConnection = client.db()
                return cb()
            })
            .catch((err) => {
                return cb(err)
            })
    },
    getDb: () => dbConnection
}