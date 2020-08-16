const express = require('express');
const router = express.Router();

// Recipe Model
const Recipe = require('../../models/Recipe');

// @route GET api/recipes
// @desc Get All Recipes
// @access Public
router.get('/', (req, res) => {
  Recipe.find()
    .then(recipes => res.json(recipes))
});

// @route POST api/recipes
// @desc Create A Recipe
// @access Public
router.post('/', (req, res) => {
  const newRecipe = new Recipe({
    name: req.body.name,
    ingredients: req.body.ingredients,
    method: req.body.method
  });

  newRecipe.save()
    .then(recipe => res.json(recipe));
});

router.patch('/:id', (req, res) => {
  const recipeId = req.params.id;

  Recipe.findByIdAndUpdate(recipeId, req.body, {new: true})
    .then(updatedRecipe => res.json(updatedRecipe))
    .catch(err => res.status(404).json({success: false}));
})


// @route DELETE api/recipes/:id
// @desc Delete A Recipe
// @access Public
router.delete('/:id', (req, res) => {
  Recipe.findById(req.params.id)
    .then(recipe => recipe.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
})

module.exports = router;