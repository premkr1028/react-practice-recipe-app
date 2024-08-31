import { createContext } from "react";
export const GlobalContext = createContext(null);
import { useState } from "react";

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favList, setFavList] = useState([]);
  function addTofavs(getCurrentItem){
let cpyList = [...favList]

 let index = cpyList.findIndex(item => item.recipe_id === getCurrentItem.recipe_id)

    if(index === -1){
      cpyList.push(getCurrentItem)
    }else{
      cpyList.splice(index,1)
    }
    setFavList(cpyList)
  }
console.log("favs")
  console.log(favList)
    async function handleSubmit(e) {
      e.preventDefault();
          setLoading(true)
    try {
      fetch(`https://forkify-api.herokuapp.com/api/search?q=${searchParam}`)
        .then((res) => res.json())
        .then((data) => {
      
          setRecipeList(data.recipes)
          setLoading(false)
          setSearchParam('')
        });
    } catch (e) {
      console.log(e);
    }
  }
  // console.log(recipeList)
  return (
    <GlobalContext.Provider
      value={{ searchParam, loading, recipeList, setSearchParam, handleSubmit,recipeDetailsData, setRecipeDetailsData,favList,setFavList,addTofavs }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
