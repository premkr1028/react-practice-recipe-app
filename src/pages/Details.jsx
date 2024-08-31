import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import { GlobalContext } from "../context"

export default function Details(){
  const params = useParams()
let finId  = params.id
  console.log(finId.slice(1))
  const {recipeDetailsData, setRecipeDetailsData, addTofavs,favList} = useContext(GlobalContext)
const [imgUrl , setImgUrl] = useState('')
  const [fullData, setFullData] = useState({})
  useEffect(()=>{
fetch(`https://forkify-api.herokuapp.com/api/get?rId=${finId.slice(1)}`).then(res => res.json()).then(data =>{
                                  // console.log(data)
setRecipeDetailsData(data)
  setImgUrl(data.recipe.image_url)
}
        )
  }, [])
// let img = recipeDetailsData["recipe"]
  
  // console.log(fullData)
  return(
    
    <>
<div className="container mx-auto py-[10px] sm:grid grid-cols-2 flex flex-col gap-[15px] px-[4px]">

<div className="md:h-[350px] h-[200px] sm:h-[200px] overflow-hidden rounded-xl group px-[5px]">
<img src={imgUrl}
  className="w-full h-full object-cover block group-hover:scale-[1.05] duration-300"/>
  </div>
 

  <div className="flex flex-col gap-[10px] px-[5px]">
    
    <h3 className="sm:text-sm  text-[20px] font-bold">{recipeDetailsData?.recipe?.publisher}</h3>
    <span className="sm:text-md text-[22px]">{recipeDetailsData?.recipe?.title}</span>
    <button className="bg-black text-white rounded-xl py-[6px]" onClick={()=>addTofavs(recipeDetailsData.recipe)}>
      {/* {console.log(favList.f)} */}
      {
        favList.find(item => item.recipe_id === recipeDetailsData.recipe.recipe_id) ?
      "Remove to favs" : "Add from favourites"
      }
    </button>
    <div>

 <h3 className="font-bold sm:text-xl text-[20px]">Ingredients</h3>
    
      {
        recipeDetailsData?.recipe?.ingredients.map((ing,idx)=>(
          <p className="sm:text-md text-[18px]" key ={idx}>&middot;{ing}</p>
        ))
      }
    </div>
  </div>
</div>
    </>
  )
}