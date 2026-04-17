
import AppBar from "./components/AppBar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Counter from "./components/Counter"
import Login from "./components/Login"
import ListProducts from "./Pages/ListProducts"
import EditProducts from "./Pages/EditProducts"
import GadgetStore from "./Pages/GadgetStore"
import ProptectedRoute from "./components/ProtectedRoute";
import React, { Suspense } from "react"

const ViewCart = React.lazy(() => import('./Pages/ViewCart'));


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
          <AppBar />

        </header>
        <main>
          <Suspense fallback={<div>loading...</div>}>
          <Routes>
            <Route path="/" element={<Counter inputCount={0} />} />
            <Route path="/products" 
            element={<ProptectedRoute><ListProducts /></ProptectedRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/products/:id" element={<ProptectedRoute><EditProducts /></ProptectedRoute>} />
            <Route path="/gadgets" element={<ProptectedRoute><GadgetStore /></ProptectedRoute>} />
            <Route path="/viewcart" element={<ProptectedRoute><ViewCart /></ProptectedRoute>} />
          </Routes>
          </Suspense>
        </main>

      </div>
    </Router>
  )
}

export default App
