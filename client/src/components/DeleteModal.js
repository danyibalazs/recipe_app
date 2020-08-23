import React, { useState } from "react";

import { connect } from "react-redux";
import { deleteRecipe } from "../actions/recipeActions";
import PropTypes from "prop-types";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const DeleteModal = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const deleteRecipeHandler = (id) => {
    props.deleteRecipe(id);
  };

  return (
    <div>
      <Button color="danger" className="float-left" onClick={toggle}>
        Delete
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          Delete {props.selectedRecipe.name}
        </ModalHeader>
        <ModalBody>Are you sure ?</ModalBody>
        <ModalFooter>
          <Button
            color="danger"
            onClick={() => deleteRecipeHandler(props.selectedRecipe._id)}
          >
            Delete
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

DeleteModal.propTypes = {
  deleteRecipe: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { deleteRecipe })(DeleteModal);
