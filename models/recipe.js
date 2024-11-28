const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    ingredients: {
        type: [String],
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Recipe = mongoose.model("Recipe", recipeSchema)
module.exports = Recipe