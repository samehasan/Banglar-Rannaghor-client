/* ServiceDetails.jsx */

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const { id } = useParams();
  const [chef, setChef] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch(`https://chef-seven.vercel.app/allData`)
      .then((res) => res.json())
      .then((data) => {
        const foundChef = data.services.find((chef) => chef.id === parseInt(id));
        setChef(foundChef);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleFavorite = (recipeId) => {
    const newFavorites = [...favorites, recipeId];
    setFavorites(newFavorites);
    toast.success("Added to favorites!");
  };

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
            <p className="ServiceDetails-recipeIngredients">
              Ingredients: {recipe.ingredients.slice(0, 5).join(", ")}
            </p>
            <p className="ServiceDetails-recipeMethod">Cooking Method: {recipe.cooking_method}</p>
            <p className="ServiceDetails-recipeRating">Rating: {recipe.rating}</p>
            <button
              className="ServiceDetails-favoriteButton"
              disabled={favorites.includes(recipe.recipe_id)}
              onClick={() => handleFavorite(recipe.recipe_id)}
            >
              {favorites.includes(recipe.recipe_id) ? "Added to favorites!" : "Favorite"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceDetails;
