import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  ModalHeader,
} from "reactstrap";
import { connect } from "react-redux";
import { updateRecipe } from "../actions/recipeActions";

const EditModal = (props) => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState(props.selectedRecipe.name);
  const [ingredients, setIngredinets] = useState(
    props.selectedRecipe.ingredients
  );
  const [method, setMethod] = useState(props.selectedRecipe.method);

  const toggle = () => {
    setModal(!modal);
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onIngredientsChange = (e) => {
    setIngredinets(e.target.value);
  };

  const onMethodChange = (e) => {
    setMethod(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const editedRecipe = {
      name,
      ingredients,
      method,
    };

    // Add item via addItem action
    props.updateRecipe(props.selectedRecipe._id, editedRecipe);

    // Close modal
    toggle();
  };

  return (
    <div>
      <Button color="warning" className="float-left mr-2" onClick={toggle}>
        Edit
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          Edit {props.selectedRecipe.name}
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
                value={name}
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
                value={ingredients}
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
                value={method}
                onChange={onMethodChange}
              />
            </FormGroup>
            <Button
              type="submit"
              color="warning"
              style={{ marginTop: "2rem" }}
              block
            >
              Edit
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  recipe: state.recipe,
});

export default connect(mapStateToProps, { updateRecipe })(EditModal);
