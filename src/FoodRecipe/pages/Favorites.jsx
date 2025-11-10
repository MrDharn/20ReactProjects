import React, { useContext } from 'react'
import { FoodRecipeContext } from '../context/FoodRecipeContext'
import RecipeCard from '../components/RecipeCard';

const Favorites = () => {
  const {favoriteLists, setFavoriteList} = useContext(FoodRecipeContext);
    return(
        <div className='home-container'>
            {favoriteLists && favoriteLists.length > 0 ? favoriteLists.map((favList)=> {
                return  (
                <RecipeCard recipe={favList} key={favList.id} style={{marginTop: '70px'}}/>)
            }) : <div style={{color: 'tomato', fontSize: '30px', textAlign: 'center'}}>Please Add Recipe to Favorites !!!! </div>}
        </div>
    )

}

export default Favorites