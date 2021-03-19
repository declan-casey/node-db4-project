const express = require('express')
const { c } = require('./recipes-middleware')
const Recipes = require('./recipes-model')

const router = express.Router()

router.get('/recipes/:id', (req, res) => {
    
})

module.exports = router