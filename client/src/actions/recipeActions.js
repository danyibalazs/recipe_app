import axios from 'axios';
import { GET_RECIPES, ADD_RECIPE, DELETE_RECIPE, RECIPES_LOADING, UPDATE_RECIPE } from './types';

export const getRecipes = () => dispatch => {
 dispatch(setRecipesLoading());
 axios
  .get('/api/recipes')
  .then(res =>
    dispatch({
      type: GET_RECIPES,
      payload: res.data
    })
  )
};

export const addRecipe = recipe => dispatch => {
  axios
    .post('/api/recipes', recipe)
    .then(res => 
      dispatch({
        type: ADD_RECIPE,
        payload: res.data
      })
    )
};

export const updateRecipe = (id, recipe) => dispatch => {
  axios
    .patch(`/api/recipes/${id}`, recipe)
    .then(res =>
      dispatch({
        type: UPDATE_RECIPE,
        payload: res.data
      })
    )
};

export const deleteRecipe = id => dispatch => {
  axios.delete(`/api/recipes/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_RECIPE,
        payload: id
      })
    )
};

export const setRecipesLoading = () => {
  return {
    type: RECIPES_LOADING
  };
};