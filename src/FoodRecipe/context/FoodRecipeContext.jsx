import { createContext, useEffect, useState } from "react";

export const FoodRecipeContext = createContext(null);
export const FoodRecipeContextProvider = ({ children }) => {
  const [recipeData, setRecipeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [favoriteLists, setFavoriteList] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
      );
      const result = await response.json();
      if (result && result.data) {
        setLoading(false);
        setRecipeData(result.data.recipes);
        setSearch('')
      } 
    } catch (e) {
      setLoading(false);
      setError(e);
      setSearch('');
    }
  }
  useEffect(() => {

  }, []);

    function handleAddToFav(getItem){
    let favListCopy = [...favoriteLists];
    const index = favListCopy.findIndex(item => item.id === getItem.id);
    if(index === -1){
      favListCopy.push(getItem);
    } else{
      favListCopy.splice(index, 1)
    }
  setFavoriteList(favListCopy);
  }

  console.log(favoriteLists)
  const value = {
    handleSubmit,
    search,
    recipeData,
    setRecipeData,
    setSearch,
    loading,
    setLoading,
    error,
    setError,
    handleAddToFav,
    favoriteLists,
    setFavoriteList
  };
  return (
    <FoodRecipeContext.Provider value={value}>
      {children}
    </FoodRecipeContext.Provider>
  );
};
