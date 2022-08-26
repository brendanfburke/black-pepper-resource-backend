require('dotenv').config()

const express = require('express')
const app = express()

const { PORT = 4000, MONGODB_URI } = process.env;

require('./config/db.connection')

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));