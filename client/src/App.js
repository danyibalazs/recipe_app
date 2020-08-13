import React from 'react';

import AppNavbar from './components/AppNavbar';
import RecipeList from './components/RecipeList';
import RecopeModal from './components/RecipeModal';

import { Provider } from 'react-redux';
import store from './store';

import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <RecopeModal />
          <RecipeList />
        </Container>
        
      </div>
    </Provider>
  );
}

export default App;
