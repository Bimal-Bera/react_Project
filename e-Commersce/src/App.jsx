import './App.css'

import Navbar from './User/Navbar'
import Product from './User/Product'

function App() {

  return (
    <>
    <Navbar/>
    <Product/>
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">Main Content</h1>
      {/* Add your main content here */}
    </div>
      
    </>
  )
}

export default App
