// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import ContactUs from "./Pages/ContactUs";
import FranchiseOpportunities from "./Pages/FranchiseOpportunities";
import Container from "react-bootstrap/Container";
import Footer from "./Components/Footer";
import "./App.css";


function App() {
  return (
    <>
     <Router>
       <div className="App">
         <Navbar />
         <Container className="mt-3">
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/about" element={<About />} />
             <Route path="/products" element={<Products />} />
             <Route path="/contactUs" element={<ContactUs />} />
             <Route path="/franchise-opportunities" element={<FranchiseOpportunities />}/>
           </Routes>
         </Container>
       </div>
     </Router>
     <Footer/>
    </>
  );
}

export default App;
