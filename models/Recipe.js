const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const RecipeSchema = new Schema({
  name: {
    type: String,
    required: true
  } 
});

module.exports = Recipe = mongoose.model('recipe', RecipeSchema);