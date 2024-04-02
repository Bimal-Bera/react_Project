import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Productlist from './User/Productlist';
import Home from './User/Home'
import CartPage from './User/CartPage';
import Footer from './User/Footer';
import AboutPage from './User/AboutPage';
import Navbar from './User/Navbar';


function App() {
  
  return (
    <>
    
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryName" element={<Productlist />} />
        <Route path="/category/:categoryName" element={<Productlist />} />
        <Route path="/category/:categoryName" element={<Productlist />} />
        <Route path="/category/:categoryName" element={<Productlist />} />
        <Route path="/category/:categoryName" element={<Productlist />} />
        <Route path="/category/:categoryName" element={<Productlist />} />
        <Route path="/category/:categoryName" element={<Productlist />} />
        <Route path="/category/:categoryName" element={<Productlist />} />
        
        <Route path="/adout" element={<AboutPage />} />
        <Route path="/category/:categoryName" element={<Productlist/>} />
        
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
