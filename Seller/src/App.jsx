import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './SellerComponent/Navbar';
import Home from './SellerComponent/Home';
import Login from './SellerComponent/Login';

function App() {
  return (
    <>
    <Router>
    <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </Router>
    </>
  );
}

export default App;
