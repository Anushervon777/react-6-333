import { Link, Outlet } from "react-router-dom";
import logo from "/src/assets/Logo (3).png"
import Home from "../pages/home/home";
import About from "../pages/about/about";
import Blog from "../pages/blog/blog";
import Contact from "../pages/contact/contact";
import "./layout.css"
export default function Layout(){
  return <>
    <div className="Navbar">
      <div><img src={logo} alt="" /></div>
      <div className="divLinks" style={{display:"flex", justifyContent:"space-between",alignItems:"center"}}>
        <Link style={{textDecoration:"none",color:"black",fontFamily:"sans-serif",fontSize:"10px"}} to={"/home"}><Home/></Link> 
        <Link style={{textDecoration:"none",color:"black",fontFamily:"sans-serif",fontSize:"10px"}} to={"/about"}><About/></Link> 
        <Link style={{textDecoration:"none",color:"black",fontFamily:"sans-serif",fontSize:"10px"}} to={"/blog"}><Blog/></Link> 
        <h1>pricing</h1>
        <Link style={{textDecoration:"none",color:"black",fontFamily:"sans-serif",fontSize:"10px"}} to={"/contact"}><Contact/></Link> 
        </div>
    </div>
    <Outlet/>
  </>
}