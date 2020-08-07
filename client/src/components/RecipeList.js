import React, { useState } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { v4 as uuidv4} from 'uuid';

const RecipeList = () => {
  
  const [recipes, setRecipes] = useState([
    {id: uuidv4(), name: 'Chicken Stir Fry'},
    {id: uuidv4(), name: 'Spaghetti Bolognese'},
    {id: uuidv4(), name: "Sepherd's Pie"}
  ]);

  const addRecipeHandler = (name) => {
    setRecipes([...recipes, {id: uuidv4(), name}])
  }

  const deleteRecipeHandler = (id) => {
    recipes.filter(recipe => recipe.id != id)
    setRecipes(recipes.filter(recipe => recipe.id != id))
  }
  
  return(
    
    <Container>
        <Button 
          color="dark" 
          style={{marginBottom: '2rem'}}
          onClick={() => {
            const name = prompt('Enter Item');
            if(name) {
              addRecipeHandler(name);
            }
          }}>
          Add Item
        </Button>
        <ListGroup>
            {recipes.map(({id, name}) => ( 
              <ListGroupItem key={id}>
                <Button
                  className="remove-btn mr-2"
                  color="danger"
                  size="sm"
                  onClick={ () => {
                    deleteRecipeHandler(id)
                  }}>&times;
                </Button>
                {name}
              </ListGroupItem>
            ))}
        </ListGroup>
      </Container>
  )
}

export default RecipeList;