import React, { useEffect } from "react";
import RecipeItem from './RecipeItem';

import { ListGroup, ListGroupItem } from "reactstrap";
import { connect } from 'react-redux';
import { getRecipes } from '../actions/recipeActions';
import PropTypes from 'prop-types';

const RecipeList = (props) => {
  
  const { recipes } = props.recipe;
  
  useEffect(() => {
    props.getRecipes();
  }, []);
  
  
  return ( 
      <ListGroup>
        {recipes.map((recipe) => (
          <ListGroupItem key={recipe._id}>
            <RecipeItem 
              recipe={recipe}
            />

          </ListGroupItem>
        ))}
      </ListGroup>  
  );
};

RecipeList.propTypes = {
  getRecipes: PropTypes.func.isRequired,
  recipe: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  recipe: state.recipe
});

export default connect(mapStateToProps, { getRecipes })(RecipeList);
