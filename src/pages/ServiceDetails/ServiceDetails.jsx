import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      <h2>{chef.name}</h2>
      <img src={chef.picture} alt={chef.name} />
      <p>{chef.bio}</p>
      <p>Likes: {chef.likes}</p>
      <p>Recipes: {chef.recipe}</p>
      <p>Years of Experience: {chef.years_of_experience}</p>
      <h3>Recipes</h3>
      <ul>
        {chef.recipes.map((recipe) => (
          <li key={recipe.recipe_id}>
            <h4>{recipe.recipe_name}</h4>
            <p>Ingredients: {recipe.ingredients.join(", ")}</p>
            <p>Cooking Method: {recipe.cooking_method}</p>
            <p>Rating: {recipe.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceDetails;
