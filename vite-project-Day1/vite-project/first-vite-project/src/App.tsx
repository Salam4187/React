
import AppBar from "./components/AppBar"
import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import Counter from "./components/Counter"
import Login from "./components/Login"


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
            <Route path="/products" element= {<div>Products</div>}/>
            <Route  path="/login" element= {<Login/>} />
            </Routes>
          </main>

    </div>
    </Router>
  )
}

export default App
