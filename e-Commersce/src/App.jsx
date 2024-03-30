import './App.css'

import Navbar from './User/Navbar'
import Product from './User/Product'
import Footer from './User/Footer'
import Home from './User/Home'

function App() {

  return (
    <>
    <Navbar/>
    <Home/>
    <Product/>
    {/*<div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">Main Content</h1>
      
  </div>*/}
      <Footer/>
    </>
  )
}

export default App
