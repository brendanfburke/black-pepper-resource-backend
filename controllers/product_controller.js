const express = require('express')
const router = express.Router()
const { product } = require('../models')

router.get('/', async (req, res, next) => {
    try {
        res.json(await req.product)
    } catch (err) {
        console.log(err)
    }
})

router.post('/', async (req, res, next) => {

    let newProduct = req.body
    try {
        console.log(newProduct)
        res.json(await product.create(newProduct))
    } catch (err) {
        console.log(err)
    }
})

router.get('/:id', async (req, res, next) => {
    
    let id = req.params.id

    try {
        res.json(await Product.find({}))
    } catch (err) {
        console.log(err)
    }
})


module.exports = router