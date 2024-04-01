import './App.css'

import Navbar from './User/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Productlist from './User/Productlist';
import Home from './User/Home'
import ImageSlider from './User/ImageSlider'
import Footer from './User/Footer';
import AboutPage from './User/AboutPage';


function App() {
  
  return (
    <>
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/terracotta" element={<Productlist />} />
        <Route path="/tyer" element={<Productlist />} />
        <Route path="/fabric" element={<Productlist />} />
        <Route path="/coconut" element={<Productlist />} />
        <Route path="/bambo" element={<Productlist />} />
        <Route path="/crok" element={<Productlist />} />
        <Route path="/copper" element={<Productlist />} />
        <Route path="/wood" element={<Productlist />} />
        <Route path="/adout" element={<AboutPage />} />
        <Route path="/category/:categoryName" component={Productlist} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
