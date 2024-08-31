import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { GlobalContext } from "../context";
export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext);
  const [openMenu , setOpenMenu] = useState(false)
  // console.log(searchParam);
  return (
    <nav className="w-full sm:px-[20px] px-[8px] sm:py-[20px] py-[5px] border-gray-300 h-[30] mx-auto flex justify-between items-center">
      <h2 id="logo" className="text-[30px] text-orange-300">
        Food recipe
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="search items..."
          value={searchParam}
          onChange={(e) => {
           setSearchParam(e.target.value)
          }}
          className="px-[15px] flex items-center h-[40px] bg-white/75 sm:rounded-full rounded-[20px] outline-none sm:w-[30vw] w-[50vw] shadow-lg border-[0.5px] border-gray-200 focus:shadow-gray-200 shadow-gray-100 "
        />
      </form>
      <ul className="sm:flex gap-[2vw] hidden">
        <li>
          <NavLink
            to={"/"}
            className={"text-black/75 hover:text-gray-400 duration-200"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"favourites"}
            className={"text-black/75 hover:text-gray-400 duration-200"}
          >
            Favourites
          </NavLink>
        </li>
      </ul>
      <div className="sm:hidden z-[50]">
        <details className="relative w-[30px] h-[30px]">
          <summary onClick={()=>{
      setOpenMenu(prev => !prev)
          }}>
            {
              openMenu ? <i className="sm:hidden scale-[1.2] fa-solid fa-xmark"></i>:  
            <i className="sm:hidden fa-solid fa-bars"></i>
            }
          </summary>
          <ul className="right-[0px] rounded-[10px] bg-white border-[0.5px] border-gray-400 px-[10px] py-[12px] flex flex-col gap-[15px] absolute">
            <li>
              <NavLink
                to={"/"}
                className={"text-black/75 hover:text-gray-400 duration-200"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"favourites"}
                className={"text-black/75 hover:text-gray-400 duration-200"}
              >
                Favourites
              </NavLink>
            </li>
          </ul>
        </details>
      </div>
    </nav>
  );
}
