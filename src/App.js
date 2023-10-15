// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';
import recipes from './recipes';

function App() {
  const [recipeData] = useState(recipes);

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <RecipeList recipes={recipeData} />} />
        <Route path="/recipe/:id" render={() => <RecipeDetail recipes={recipeData} />} />
      </Switch>
    </Router>
  );
}

export default App;

