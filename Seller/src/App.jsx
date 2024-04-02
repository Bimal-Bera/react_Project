
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './SellerComponent/Navbar';
import Home from './SellerComponent/Home';
import Login from './SellerComponent/Login';
import Footer from './SellerComponent/Footer';
import AddProduct from './SellerComponent/AddProduct';
import OrderManagement from './SellerComponent/OrderManagement';
import SellerProducts  from './SellerComponent/SellerProducts';
import UpdateProductForm from './SellerComponent/UpdateProductForm';
import SellerInformation from './SellerComponent/SellerInformation';

const seller = {
  name: 'John Doe',
  email: 'john@example.com',
  location: 'New York, USA',
  avatar: 'https://via.placeholder.com/150',
  about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
};
function App() {
  return (
    <>
    <Router>
    <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<AddProduct/>} />
        <Route path="/Manageorders" element={<OrderManagement/>}/>
        <Route path="/ManageProducts" element={<SellerProducts/>}/>
        <Route path="/Updateproducts" element={<UpdateProductForm/>}/>
        <Route path="/profile" element={<SellerInformation seller={seller}/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
