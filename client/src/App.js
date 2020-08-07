import React from 'react';

import AppNavbar from './components/AppNavbar';
import RecipeList from './components/RecipeList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <RecipeList />
    </div>
  );
}

export default App;
