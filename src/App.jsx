import { createBrowserRouter, RouterProvider } from "react-router-dom"
import About from "./pages/about/about"
import Home from "./pages/home/home"
import Contact from "./pages/contact/contact"
import Blog from "./pages/blog/blog"
import Layout from "./layout/layout"

export default function App(){
  const router = createBrowserRouter([
    {path:"/",element:<Layout/>, children:[
      {path:"/home", element:<Home/>},
      {path:"/about",element:<About/>},
      {path:"/contact",element:<Contact/>},
      {path:"/blog",element:<Blog/>}
    ]}
  ])
  return <>
  <RouterProvider router={router}/>
  </>
}