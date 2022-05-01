// import './App.css';

import Home from "./component/Home";
import Navber from "./component/Navbar";
import {BrowserRouter, Routes,Route } from "react-router-dom"
import Products from "./component/Products";
import About from "./component/About";
import Contact from "./component/About";


function App() {
  return (
    <div className="App">
      <Navber/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/products/:id" element={<Products/>}/>


      </Routes>

    </div>
  );
}

export default App;
