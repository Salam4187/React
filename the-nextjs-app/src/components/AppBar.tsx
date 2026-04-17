"use client"

import { useContext } from "react";
import  Link from "next/link";
import { AppThemeContext } from "../context/AppThemeContext";



function AppBar(){

  function swithTheme(){
    themeContext.changeMode(themeContext.mode === "dark"? "light" :"dark");
    console.log("mode-->",themeContext.mode)

  }

const themeContext=useContext(AppThemeContext);

    return (
     <nav className={`navbar navbar-${themeContext.mode} bg-${themeContext.mode} border-bottom border-body`}>
        <div className="container-fluid">
            <a className="navbar-brand">React</a>
            <ul className="nav">
  <li className="nav-item">
    <Link className="nav-link" href="/">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" href="/products">Products</Link>
  </li>
    <li className="nav-item">
    <Link className="nav-link" href="/login">Login</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" href="/gadgets">Gadget Store</Link>
  </li>
    <li className="nav-item">
    <Link className="nav-link" href="/viewcart">View Cart</Link>
  </li>
     <li className="nav-item">
    <Link className="nav-link" href="/customers">Customers</Link>
  </li>

       <li className="nav-item">
    <Link className="nav-link" href="/supplier">Suppliers</Link>
  </li>

     <li className="nav-item">
    <button className="btn btn-warning" onClick={swithTheme}>Swith Theme</button>
  </li>


</ul>
        </div>
    </nav>
    )
}

export default AppBar;