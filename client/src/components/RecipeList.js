import React, { useEffect } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { connect } from 'react-redux';
import { getRecipes, deleteRecipe } from '../actions/recipeActions';
import PropTypes from 'prop-types';

const RecipeList = (props) => {
  
  useEffect(() => {
    props.getRecipes();
  }, []);
  
  const deleteRecipeHandler = (id) => {
    props.deleteRecipe(id);
  };

  const { recipes } = props.recipe;
  return (
    <Container>
      <ListGroup>
        {recipes.map(({ id, name }) => (
          <ListGroupItem key={id}>
            <Button
              className="remove-btn mr-2"
              color="danger"
              size="sm"
              onClick={() => {
                deleteRecipeHandler(id);
              }}
            >
              &times;
            </Button>
            {name}
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
};

RecipeList.propTypes = {
  getRecipes: PropTypes.func.isRequired,
  deleteRecipe: PropTypes.func.isRequired,
  recipe: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  recipe: state.recipe
});

export default connect(mapStateToProps, { getRecipes, deleteRecipe})(RecipeList);
