const express = require('express')
const router = express.Router()
const { Product } = require('../models')

router.get('/', async (req, res, next) => {
    try {
        // res.json(await req.product)
        res.json({working: true})
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

router.post('/', async (req, res, next) => {
    try {
        const createdProduct = await Product.create(req.body)
        console.log(createdProduct)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router