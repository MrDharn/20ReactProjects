import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Details from './pages/Details'
import { FoodRecipeContextProvider } from './context/FoodRecipeContext'

const App = () => {
  return (
    <div>
      <FoodRecipeContextProvider>

        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path='/recipe-item/:id' element={<Details/>}/>
        </Routes>
      </FoodRecipeContextProvider>
    </div>
  )
}

export default App