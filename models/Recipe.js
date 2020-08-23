const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const RecipeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  method: {
    type: String,
  },
  creator: {
    type: Object,
    required: true,
  },
});

module.exports = Recipe = mongoose.model("recipe", RecipeSchema);
