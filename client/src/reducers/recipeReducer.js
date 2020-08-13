import { v4 as uuidv4} from 'uuid';
import {  GET_RECIPES, ADD_RECIPE, DELETE_RECIPE } from '../actions/types';

const initialState = {
  recipes: [
    { id: uuidv4(), name: "Chicken Stir Fry" },
    { id: uuidv4(), name: "Spaghetti Bolognese" },
    { id: uuidv4(), name: "Sepherd's Pie" }
  ]
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_RECIPES:
      return {
        ...state
      }
    case DELETE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter(recipe => recipe.id !== action.payload)
      }
    case ADD_RECIPE:
      return {
        ...state,
        recipes: [action.payload, ...state.recipes]
      }
    default:
      return state
  }
}