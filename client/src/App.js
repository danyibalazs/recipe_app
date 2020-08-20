import React, { useEffect } from 'react';

import AppNavbar from './components/AppNavbar';
import RecipeList from './components/RecipeList';
import RecipeModal from './components/RecipeModal';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  useEffect(() => {
    store.dispatch(loadUser());
  }, [])

  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar /> 
        <Container>
          <RecipeModal />
          <RecipeList />
        </Container>
        
      </div>
    </Provider>
  );
}

export default App;
