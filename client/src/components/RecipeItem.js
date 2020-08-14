import React, { useState } from 'react';
import { Collapse, Button } from 'reactstrap';

const RecipeItem = ({recipe}) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <div>
      <span style={{fontSize: '1.2rem'}}>{recipe.name}</span>
      <Button color="secondary" onClick={toggle} className="float-right">View</Button>
      <Collapse isOpen={isOpen}>
          <h6 className="mt-3" >Ingredients:</h6>
          <p>{recipe.ingredients}</p>
          <h6>Method:</h6>
          <p>{recipe.method}</p> 
          <div>
            <Button color="secondary" onClick={toggle}>Close</Button>
            <Button color="danger" className="float-right">Delete</Button>
            <Button color="warning" className="float-right mr-2">Edit</Button>
          </div>      
      </Collapse>
    </div>
  )
}

export default RecipeItem;