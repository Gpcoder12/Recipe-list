// src/RecipeDetail.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const RecipeDetail = ({ recipes }) => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <Link to="/">Back to Recipes List</Link>
    </div>
  );
};

export default RecipeDetail;
