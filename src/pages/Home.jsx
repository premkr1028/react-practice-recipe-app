import { useContext } from "react"
import { GlobalContext } from "../context"
import RecipeItem from "../components/RecipeItem"

export default function Home(){
const {recipeList, loading} = useContext(GlobalContext)
  if(loading)return <div className="w-full h-[100vh] flex justify-center items-center">Loading...Please wait</div>
  return(
    <>
      {
         recipeList && recipeList.length > 0 ?    <div className={" mx-auto flex-wrap  gap-[15px] py-[8px]  sm:w-[100vw] grid lg:grid-cols-5 sm:grid-cols-4 grid-cols-2 place-items-center"}>
           {

             
           recipeList.map(item =>
             <RecipeItem item={item}/> 
             ) 
           }
         </div> : <p className="lg:text-3xl md:text-2xl sm:text-xl text-[20px] mt-[10vw] text-center">Nothing to show. Please search something</p>
      } 

    </>
  )
}