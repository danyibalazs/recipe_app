import React, { useState } from 'react';
import { Collapse, Button } from 'reactstrap';

import DeleteModal from './DeleteModal';
import EditModal from './EditModal';

const RecipeItem = ({recipe}) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const ingredientArr = recipe.ingredients.split('\n');
  const methodArr = recipe.method.split('\n\n');

  return (
    <div>
      <span style={{fontSize: '1.2rem'}}>{recipe.name}</span>
      <Button color="secondary" onClick={toggle} className="float-right">View</Button>
      <Collapse isOpen={isOpen}>
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
            <EditModal selectedRecipe={recipe} />
            <DeleteModal selectedRecipe={recipe} />
          </div>         
      </Collapse>
    </div>
  )
}

export default RecipeItem;