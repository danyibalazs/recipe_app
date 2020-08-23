const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

// Recipe Model
const Recipe = require("../../models/Recipe");

// @route GET api/recipes
// @desc Get All Recipes
// @access Public
router.get("/", (req, res) => {
  Recipe.find().then((recipes) => res.json(recipes));
});

// @route POST api/recipes
// @desc Create A Recipe
// @access Private
router.post("/", auth, (req, res) => {
  const newRecipe = new Recipe({
    name: req.body.name,
    ingredients: req.body.ingredients,
    method: req.body.method,
    creator: req.body.creator,
  });

  newRecipe.save().then((recipe) => res.json(recipe));
});

router.patch("/:id", auth, (req, res) => {
  const recipeId = req.params.id;

  Recipe.findByIdAndUpdate(recipeId, req.body, { new: true })
    .then((updatedRecipe) => res.json(updatedRecipe))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route DELETE api/recipes/:id
// @desc Delete A Recipe
// @access Private
router.delete("/:id", auth, (req, res) => {
  Recipe.findById(req.params.id)
    .then((recipe) => recipe.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
