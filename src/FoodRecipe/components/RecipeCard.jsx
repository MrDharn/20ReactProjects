import {Link} from 'react-router-dom'
import '../css/recipeCard.css'

const RecipeCard = ({recipe}) => {
  return (
    <div className='recipe-container'>
        <div className="recipe-info">
            <img src={recipe.image_url} alt="" />
            <div className="title">
                <h4>{recipe.title}</h4>
            </div>
        </div>
        <Link to={`/recipe-item/${recipe.id}`}>Details</Link>
    </div>
  )
}

export default RecipeCard