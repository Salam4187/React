
import AppBar from "./components/AppBar"
import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import Counter from "./components/Counter"
import Login from "./components/Login"
import ListProducts from "./Pages/ListProducts"
import EditProducts from "./Pages/EditProducts"
import GadgetStore from "./Pages/GadgetStore"
import ViewCart from "./Pages/ViewCart"


function App() {
 

  return (
    <Router>
    {/* // <div>
    //   <h4>React vite Application</h4>
    //   <Message text="Hello React" color="blue"/>
    //   <Message text="Hello in Yellow" color="yellow"/>
    //   <Counter inputCount={0}/>
    //   <Counter inputCount={15}/>
    //   </div> */}
    <div className="container">
          <header>
           <AppBar/>

          </header>
          <main>
           <Routes>   
            <Route path="/" element= {<Counter inputCount={0}/>}/>
            <Route path="/products" element= {<ListProducts/>}/>
            <Route  path="/login" element= {<Login/>} />
            <Route  path="/products/:id" element= {<EditProducts/>} />
            <Route  path="/gadgets" element= {<GadgetStore/>} />
            <Route  path="/viewcart" element= {<ViewCart/>} />
            </Routes>
          </main>

    </div>
    </Router>
  )
}

export default App
