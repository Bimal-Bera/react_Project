import './App.css'

import Navbar from './User/Navbar'
import Product from './User/Product'
import Footer from './User/Footer'
import Home from './User/Home'
import ImageSlider from './User/ImageSlider'
import Display_limit from './User/Display_limit'

function App() {
  const images = [
    "src/assets/Images/image 9.svg",
    "src/assets/Images/Elephent.svg",
    "src/assets/Images/image 23.svg",
  ];
  return (
    <>
    <Navbar/>
    <ImageSlider images={images} />
    <Home/>
    
    {/*<div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">Main Content</h1>
      
  </div>*/}
      <Footer/>
    </>
  )
}

export default App
