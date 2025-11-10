import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { FoodRecipeContext } from "../context/FoodRecipeContext";
import './details.css'

const Details = () => {
  const { loading, setLoading, handleAddToFav, favoriteLists} = useContext(FoodRecipeContext);
  const { id } = useParams();
  const [recipeDetails, setRecipeDetails] = useState(null);

  async function fetchDetails() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );

      if(!response.ok ){
        throw new Error(`Error ${response.status}: Too many API request`);
        setLoading(false);
      }
      const result = await response.json();

      if (result && result.data) {
        setLoading(false);
        setRecipeDetails(result.data.recipe);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchDetails();
  }, [id]);


  return (
    <div className="details-container">
      {recipeDetails? (
        <div className="">
          <img src={recipeDetails.image_url} alt={recipeDetails.publisher} />
          <div className="title">{recipeDetails.title}</div>
          <h4 className="cooking-time">
            Cooking time: {recipeDetails.cooking_time}
          </h4>
          <h4 className="servings">servings: {recipeDetails.servings}</h4>
          <button className="add-to-fav" onClick={()=> handleAddToFav(recipeDetails)}>
            {
              favoriteLists.findIndex(item=> item.id === recipeDetails.id) !== -1 ? 'Remove From favorites' : 'Add to Favorites'
            }
          </button>
        </div>

      ) : null}

      <div className="recipe-ingredients">
        <h4>Ingredients</h4>
        {recipeDetails &&
        recipeDetails.ingredients &&
        recipeDetails.ingredients.length > 0
          ? recipeDetails.ingredients.map((ingredient, index) => {
              return (
                  <div className="recipe-ingredients" key={index}>
                    <p className="ingredient-list">{ingredient.description}: <span className="ingredient-list">{ingredient.quantity}{ingredient.unit}</span></p>
                  </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Details;
