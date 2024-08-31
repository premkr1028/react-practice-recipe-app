import { RouterProvider, createBrowserRouter,  } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Main from './Layout/Main'
import Favourites from './pages/Favourites'
import Details from './pages/Details'

const router = createBrowserRouter([
  {
    path:`/`,
    element:<Main />,
    children:[
      {
        index:true,
        element:<Home />
      },
      {
        path:`favourites`,
        element:<Favourites />
      },
      {
        path:`recipe-item/:id`,
        element:<Details />
      }
    ]
  }
])
export default function App(){
  return(
    <RouterProvider router={router}/>
  )
}