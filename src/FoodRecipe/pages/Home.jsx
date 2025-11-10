import React, { useContext } from 'react'
import { FoodRecipeContext } from '../context/FoodRecipeContext'
import RecipeCard from '../components/RecipeCard';
import './home.css'

const Home = () => {
    const {recipeData,setRecipeData, loading} = useContext(FoodRecipeContext);

    if(loading){
        return <div className='loading'>Loading please Wait!!!!</div>
    }
    return(
        <div className='home-container'>
            {recipeData && recipeData.length > 0 ? recipeData.map((recipe)=> {
                return  (
                <RecipeCard recipe={recipe} key={recipe.id} style={{marginTop: '70px'}}/>)
            }) : <div style={{color: 'tomato', fontSize: '30px', textAlign: 'center'}}>Please search for any recipe !!!! </div>}
        </div>
    )
}

export default Home