const mongoose = require('mongoose')
// this mongodb://localhost needs to be from env
mongoose
    .connect('mongodb://127.0.0.1:27017/books', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db