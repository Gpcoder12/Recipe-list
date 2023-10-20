// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={RecipeList} />
          <Route path="/recipe/:id" component={RecipeDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

