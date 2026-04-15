import { Link } from "react-router-dom";


function AppBar(){
    return (
     <nav className="navbar bg-dark border-bottom border-body">
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

</ul>
        </div>
    </nav>
    )
}

export default AppBar;