import React, { useState } from 'react';
import { Collapse, Button } from 'reactstrap';

import DeleteModal from './DeleteModal';
import EditModal from './EditModal';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const RecipeItem = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const ingredientArr = props.recipe.ingredients.trim().split('\n');
  const methodArr = props.recipe.method.trim().split('\n\n');

  return (
    <div>
      <span style={{fontSize: '1.2rem'}}>{props.recipe.name}</span>
      <Button color="secondary" onClick={toggle} className="float-right">View</Button>
      <Collapse isOpen={isOpen}>
          <p className="mt-2">Creator: {props.recipe.creator.name}</p>
          <h6 className="mt-3" >Ingredients:</h6>
          <ul>
            {ingredientArr.map((ingredient) => <li  key={ingredient}>{ingredient}</li> )}
          </ul>
          <hr />
          <h6>Method:</h6>
          <ol>
            {methodArr.map((instruction) => <li className="mb-3" key={instruction}>{instruction}</li> )}
          </ol>  
          <hr />
          <div>
            <Button color="secondary" onClick={toggle} className="float-left mr-2">Close</Button>
            {props.isAuthenticated && props.recipe.creator._id === props.user._id &&
              <div>
                <EditModal selectedRecipe={props.recipe} />
                <DeleteModal selectedRecipe={props.recipe} />
              </div> 
            }   
          </div>         
      </Collapse>
    </div>
  )
}

RecipeItem.propTypes = {
 isAuthenticated: PropTypes.bool,
 user: PropTypes.object
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default connect(mapStateToProps, null)(RecipeItem);