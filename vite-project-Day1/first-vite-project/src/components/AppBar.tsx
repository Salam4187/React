import { useContext } from "react";
import { Link } from "react-router-dom";
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
    <Link className="nav-link" to="/">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/products">Products</Link>
  </li>
    <li className="nav-item">
    <Link className="nav-link" to="/login">Login</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/gadgets">Gadget Store</Link>
  </li>
    <li className="nav-item">
    <Link className="nav-link" to="/viewcart">View Cart</Link>
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