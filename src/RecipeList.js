// src/RecipeList.js
import React from 'react';
import { Link } from 'react-router-dom';

const RecipeList = ({ recipes }) => {
  return (
    <div>
      <h1>Recipes List</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;

