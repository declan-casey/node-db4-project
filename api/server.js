const express = require('express')

const RecipeRouter = require('./recipes/recipes-router')

const server = express()

server.use(express.json())
server.use('./api/recipes', RecipeRouter)

// server.get("/", (req, res) => {
//     res.json({ message: "Running"})
// })

module.exports = server