import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  ModalHeader,
} from 'reactstrap';
import { connect } from 'react-redux';
import { addRecipe } from '../actions/recipeActions';
import { PropTypes } from 'prop-types';

const RecipeModal = (props) => {

  const [modal, setModal] = useState(false);
  const [name, setName] = useState('');
  const [ingredients, setIngredinets] = useState('');
  const [method, setMethod] = useState('');

  const toggle = () => {
    setModal(!modal);
  }

  const onNameChange = (e) => {
    setName(e.target.value);
  }

  const onIngredientsChange = (e) => {
    setIngredinets(e.target.value);
  }

  const onMethodChange = (e) => {
    setMethod(e.target.value);
  }

  const onSubmit = e => {
    e.preventDefault();

    const newRecipe = {
      name,
      ingredients,
      method,
      creator: props.user   
    }

    // Add item via addItem action
    props.addRecipe(newRecipe);

    // Close modal
    toggle();
  }

  return(
      <div>
        { props.isAuthenticated ? <Button
          color="dark"
          style={{marginBottom: '2rem'}}
          onClick={toggle}>
          Add Recipe
        </Button> : <h4 className="mb-3 ml-4">Please log in to manage recipes!</h4>}
        
        <Modal
          isOpen={modal}
          toggle={toggle}>
          <ModalHeader toggle={toggle}>
            New Recipe
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={onSubmit}>
              <FormGroup>
                <Label for="recipe-name">Name:</Label>
                <Input
                  type="text"
                  name="name"
                  id="recipe-name"
                  placeholder="Add recipe name"
                  onChange={onNameChange}
                />       
              </FormGroup>
              <FormGroup>
                <Label for="recipe-ingredients">Ingredients:</Label>
                <Input 
                  rows="5" 
                  type="textarea" 
                  name="ingredients" 
                  id="recipe-ingredients" 
                  placeholder="Add ingredients, one in each line" 
                  onChange={onIngredientsChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="recipe-method">Method:</Label>
                <Input 
                  rows="10" 
                  type="textarea" 
                  name="method" 
                  id="recipe-method" 
                  placeholder="Add instructions in order, separated by empty lines" 
                  onChange={onMethodChange}
                />
              </FormGroup>
              <Button
                  color="dark"
                  style={{marginTop: '2rem'}}
                  block
                >Add Recipe</Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
  );
}

RecipeModal.propTypes = {
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object
}

const mapStateToProps = state => ({
  recipe: state.recipe,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default connect(mapStateToProps, { addRecipe })(RecipeModal);
