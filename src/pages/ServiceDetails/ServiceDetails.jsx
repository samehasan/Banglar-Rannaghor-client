/* ServiceDetails.jsx */

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const { id } = useParams();
  const [chef, setChef] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/allData`)
      .then((res) => res.json())
      .then((data) => {
        const foundChef = data.services.find((chef) => chef.id === parseInt(id));
        setChef(foundChef);
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (!chef) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ServiceDetails">
      <h2 className="ServiceDetails-title">{chef.name}</h2>
      <img className="ServiceDetails-image" src={chef.picture} alt={chef.name} />
      <p className="ServiceDetails-bio">{chef.bio}</p>
      <div className="ServiceDetails-info">
        <div className="ServiceDetails-likes">
          <p className="ServiceDetails-label">Likes:</p>
          <p className="ServiceDetails-value">{chef.likes}</p>
        </div>
        <div className="ServiceDetails-recipe">
          <p className="ServiceDetails-label">Recipes:</p>
          <p className="ServiceDetails-value">{chef.recipe}</p>
        </div>
        <div className="ServiceDetails-experience">
          <p className="ServiceDetails-label">Years of Experience:</p>
          <p className="ServiceDetails-value">{chef.years_of_experience}</p>
        </div>
      </div>
      <h3 className="ServiceDetails-subtitle">Recipes</h3>
      <ul className="ServiceDetails-recipes">
        {chef.recipes.map((recipe) => (
          <li key={recipe.recipe_id} className="ServiceDetails-recipeItem">
            <h4 className="ServiceDetails-recipeTitle">{recipe.recipe_name}</h4>
            <p className="ServiceDetails-recipeIngredients">Ingredients: {recipe.ingredients.join(", ")}</p>
            <p className="ServiceDetails-recipeMethod">Cooking Method: {recipe.cooking_method}</p>
            <p className="ServiceDetails-recipeRating">Rating: {recipe.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceDetails;
