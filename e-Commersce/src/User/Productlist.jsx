import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../assets/Product/product';
import ProductPopup from './ProductPopup';
import CategoryImageSlider from './CategoryImageSlider ';
import Cart from './Cart';
import PropTypes from 'prop-types';
import category from '../assets/Product/Category_Image';

const Productlist = ({ handleClick }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false); // State to manage cart visibility
  const [searchQuery, setSearchQuery] = useState('');

  const { categoryName } = useParams();

  // Filter products based on the categoryName
  const filteredProducts = products.filter(product => product.category === categoryName);

  // Filter products based on search query
  const filteredProductsBySearch = filteredProducts.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle click on a product
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // Handle closing the product popup
  const handleClosePopup = () => {
    setSelectedProduct(null);
  };

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
    handleClosePopup(); // Close the product popup after adding to cart
  };

  // Function to toggle cart visibility
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Handle search query change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  Productlist.propTypes = {
    product: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      banner: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    }).isRequired,
    handleClick: PropTypes.func.isRequired,
  };

  return (
    <>
      <CategoryImageSlider />
      <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProductsBySearch.map((product, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer">
            <img src={product.banner} alt={product.title} className="w-full" onClick={() => handleProductClick(product)} />
            <div className="px-6 py-4">
              <div className="font-bold mb-2">{product.title}</div>
              <div className="flex items-center">
                <img src="../src/assets/Images/Cloud.svg" alt="icon" className="w-6 h-6 mr-2" />
                <p style={{ color: "black" }} className="text-sm">17% less carbon emissions</p>
              </div>
              <div className="flex items-center">
                <img src="../src/assets/Images/Buttol.svg" alt="icon" className="w-6 h-6 mr-2" />
                <p style={{ color: "black" }} className="text-sm">86% less plastic pollution</p>
              </div>
              <p style={{ color: "black" }} className="text-sm text-left"><b>₹ {product.price}</b></p>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleClick(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
        {selectedProduct && (
          <ProductPopup
            product={selectedProduct}
            onClose={handleClosePopup}
            handleClick={handleClick}
          />
        )}

        {isCartOpen && (
          <Cart cart={cart} setCart={setCart} />
        )}
      </div>
    </>
  );
};

export default Productlist;
