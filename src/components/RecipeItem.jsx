import { Link } from "react-router-dom";

export default function RecipeItem({item}){
  return <div className="flex flex-col h-[250px] 
           overflow-hidden  p-[10px] bg-white/75 shadow-cl gap-[8px] border-2 rounded-xl border-gray-300 sm:w-[22vw] relative  lg:w-[18vw] w-[40vw] ">
  <div className="h-[30vh] flex justify-center overflow-hidden items-center rounded-lg">
  <img src={item?.image_url} alt="recipe" className="w-full"   />
  </div>
    <div>
      {
       item?.publisher.length > 17 ?<span className=" sm:text-[2vw] text-[20px] font-bold">{item?.publisher.slice(0,14)}...</span> : 
    <span className=" sm:text-[2vw] text-[20px] font-bold ">{item?.publisher}</span>
      }
<hr/>
      {
        item?.title.length > 60 ? <h3 className="sm:text-[1.8vw] text-[16px] font-semibold">{item?.title.slice(0,60)}...</h3> :
      <h3 className="sm:text-[1.8vw] text-[16px]">{item?.title}</h3>
      }
      <Link to={`/recipe-item/:${item?.recipe_id}`}
        className="rDBtn absolute bottom-[10px]  p-[5px] sm:w-[60%] w-[max-content] sm:px-[10px] px-[12px] font-medium uppercase rounded-lg tracking-wider bg-black text-white inline-block shadow-md sm:text-[1vw] text-[8px] text-nowrap"
        >Recipe Details</Link>
    </div>
  </div>
}