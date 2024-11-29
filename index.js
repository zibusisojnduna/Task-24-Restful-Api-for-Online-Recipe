const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const Recipe =  require("./models/recipe")

const app = express();
const port = 3000

app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, {
    userNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error('Error connecting to MongoDB:', err));

app.get("/", (req, res) => {
    res.send("Recipe API")
})

app.post("/recipes", async (req, res) => {
    try {
        const recipe = new Recipe(req.body)
        await recipe.save()
        res.status(201).json(recipe)
    } catch (err) {
        res.status(400).json({ message: "Error creating recipe", error: err})
    }
})

app.get("/recipes", async (req, res) => {
    try {
        const { page = 1, pageSize = 10 } = req.query
        const recipes = await Recipe.find()
        .skip ((page - 1)* pageSize)
        .limit(parseInt(pageSize))

        const totalCount = await Recipe.countDocuments()
        res.status(200).json({ recipes, totalCount, page})
    } catch (err) {
        res.status(500).json({ message:"Error fetching recipes", error: err})
    }
})

app.get("/recipes/:id", async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id)
        if (!recipe) {
            return res.status(404).json({ message: "Recipe not found" })
        }
        res.status(200).json(recipe)
    } catch (err) {
        res.status(500).json({ message: "Error fetching recipe", error: err })
    }
})

app.put("/recipes/:id", async (req, res) => {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if (!updatedRecipe) {
            return res.status(404).json({ message:"Recipe not found"})
        }
        res.status(200).json(updatedRecipe)
    } catch (err) {
        res.status(400).json({ message:"Error updating recipe", error:err})

    }
})

app.delete("/recipes/:id", async (req, res) => {
    try {
        const deltedRecipe = await Recipe.findByIdAndDelete(req.params.id)
        if (!deltedRecipe) {
            return res.status(404).json({ message:"Recipe not found"})
        }
        res.status(200).json({ message:"Recipe deleted sucessfully"})
    } catch (err) {
        res.status(500).json({ message:"Error deleting recipe", error:err})
    }
})








app.listen(port, () => {
    console.log(`Server is running on http:/localhost:${port}`)
})