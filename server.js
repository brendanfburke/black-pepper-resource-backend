require('dotenv').config()

const express = require('express')
const app = express()
const controllers = require('./controllers')
const cors = require("cors");
const morgan = require("morgan");

const { PORT = 4000, MONGODB_URI } = process.env;

require('./config/db.connection')

app.use(cors('*'));
app.use(morgan("dev")); 
app.use(express.json()); 

app.use(express.urlencoded({ extended: false }))

app.use('/products', controllers.product)

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));