import { useContext } from "react"
import { GlobalContext } from "../context"
import RecipeItem from "../components/RecipeItem"
export default function Favourites(){
   const {favList, setFavList} = useContext(GlobalContext)
  return(
    <>
      {
        favList && favList.length > 0 ? 
      
    <div className={" mx-auto flex-wrap  gap-[15px] py-[8px] sm:w-[100vw] grid lg:grid-cols-5 sm:grid-cols-4 grid-cols-2 place-items-center"}>
       {
       favList.map(item =>
         <RecipeItem item={item}/> 
         ) 
       }
     </div>
      :
        <div className="mt-[60px] w-full sm:text-[xl] text-[20px] font-bold text-center">Your fav List is empty</div>
      } 
    </>
      )
}