import {
  GET_RECIPES,
  ADD_RECIPE,
  DELETE_RECIPE,
  UPDATE_RECIPE,
  RECIPES_LOADING,
} from "../actions/types";

const initialState = {
  recipes: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        loading: false,
      };
    case DELETE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter(
          (recipe) => recipe._id !== action.payload
        ),
      };
    case ADD_RECIPE:
      return {
        ...state,
        recipes: [action.payload, ...state.recipes],
      };
    case UPDATE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.map((recipe) =>
          recipe._id === action.payload._id ? action.payload : recipe
        ),
      };
    case RECIPES_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
