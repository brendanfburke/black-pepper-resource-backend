const express = require('express')
const { route } = require('express/lib/application')
const router = express.Router()
const { product } = require('../models')

router.get('/', async (req, res, next) => {
    try {
        res.json(await product.find({}))
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
        res.json(await product.findById({_id: id}))
    } catch (err) {
        console.log(err)
    }
})

router.put('/update/:id', async (req, res, next) => {
    let id = req.params.id
    
    try {
        res.json(await product.findByIdAndUpdate(id, req.body))
    } catch (err) {
        console.log(err)
    }
})

router.delete('/delete/:id', async (req, res, next) => {
    let id = req.params.id

    try {
        res.json(await product.findByIdAndDelete(id))
    } catch (err) {
        console.log(err)
    }
})


module.exports = router