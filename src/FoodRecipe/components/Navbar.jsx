import { useContext } from "react"
import { Link } from "react-router-dom"
import { FoodRecipeContext } from "../context/FoodRecipeContext"

import '../css/nav.css'

const Navbar = () => {
    const {handleSubmit, search, setSearch} = useContext(FoodRecipeContext);

  return (
    <nav className="food-recipe-nav">
        <div className="title">

            <h3>Food Recipe</h3>
        </div>
        <form  onSubmit={handleSubmit}>
            <input type='text' onChange={(e)=> setSearch(e.target.value)} value={search}/>
        </form>
        <div className="nav-links">
            <Link to='/'>Home</Link>
            <Link to='/favorites'>Favorites</Link>
        </div>
    </nav>
  )
}

export default Navbar