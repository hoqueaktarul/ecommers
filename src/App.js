// import './App.css';

import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { Routes,Route } from "react-router-dom"
import Products from "./component/Products";
import About from "./component/About";
import Contact from "./component/Contact";
import Product from "./component/Product";
import Card from "./component/Card";
import Login from "./component/Login";
import Register from "./component/Register";


function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/card" element={<Card/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>



      </Routes>

    </div>
  );
}

export default App;
