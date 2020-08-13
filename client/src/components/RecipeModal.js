import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  ModalHeader
} from 'reactstrap';
import { connect } from 'react-redux';
import { addRecipe } from '../actions/recipeActions';
import { v4 as uuidv4} from 'uuid';

const RecipeModal = (props) => {

  const [modal, setModal] = useState(false);
  const [name, setName] = useState('');
  

  const toggle = () => {
    setModal(!modal);
  }

  const onChange = (e) => {
    setName(e.target.value);
  }

  const onSubmit = e => {
    e.preventDefault();

    const newRecipe = {
      id: uuidv4(), 
      name
    }

    // Add item via addItem action
    props.addRecipe(newRecipe);

    // Close modal
    toggle();
  }

  
    return(
      <div>
        <Button
          color="dark"
          style={{marginBottom: '2rem'}}
          onClick={toggle}>
          Add Recipe
        </Button>
        <Modal
          isOpen={modal}
          toggle={toggle}>
          <ModalHeader toggle={toggle}>
            Add To List
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={onSubmit}>
              <FormGroup>
                <Label for="item">Recipe</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add new recipe"
                  onChange={onChange}
                />
                <Button
                  color="dark"
                  style={{marginTop: '2rem'}}
                  block
                >Add Recipe</Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
}

const mapStateToProps = state => ({
  recipe: state.recipe
});

export default connect(mapStateToProps, { addRecipe })(RecipeModal);
