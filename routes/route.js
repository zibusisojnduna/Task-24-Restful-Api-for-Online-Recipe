const express = require('express')
const Recipe = require("../models/recipe")
const router = express.Router()

router.post("/recipes", async (req, res) => {
    const { name, ingredients, instructions } = req.body
    try {
        const recipe = new Recipe({ name, ingredients, instructions})
        await recipe.save()
        res.status(201).json(recipe)
    } catch (err) {
        res.status(500).json({ message:"Error creating recipe", error:err})
    }
})

router.get("/recipes", async (req, res) => {
    const { page = 1, size = 10} = req.query
    try {
        const recipes = await Recipe.find()
        .skip((page - 1)* size)
        .limit(Number(size))
        const  totalCount = await Recipe.countDocuments()
        res.json({ recipes, totalCount, currentPage: page })
    } catch (err) {
        res.status(500).json({ message:"Error fetching recipes", error: err})
    }
})

router.get("/recipes/:id", async (req, res) => {
    const { id } = req.params
    try {
        const recipe = await Recipe.findById(id)
        if (!recipe) {
            return res.status(404).json({ message: "Recipe not found"})
        }
        res.json(recipe)
    } catch (err) {
        res.status(500).json({ message: "Error fetching recipe", error: err})
    }
})

//router.put("/recpies/:id", async (req, res) => {
    //const { id } = req.params
    //const { name, ingredients, instructions } =req.body
    //try {
        
   // } 
//})