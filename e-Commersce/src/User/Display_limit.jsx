import { useState } from 'react';
import products from '../assets/Product/product';
import ProductPopup from './ProductPopup';

const Display_limit = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const limitedProducts = products.slice(0, 8); // Display only the first 8 products

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    // Add the product to cart when clicked
    setCart([...cart, product]);
  };

  const handleClosePopup = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {limitedProducts.map((product, index) => (
        <div key={index} className={`max-w-sm rounded overflow-hidden shadow-lg cursor-pointer ${cart.includes(product) ? 'bg-white' : ''}`} onClick={() => handleProductClick(product)}>
          <img src={product.banner} alt={product.title} className="w-full" />
          <div className="px-6 py-4">
            <div className="font-bold mb-2">{product.title}</div>
            <div className="flex items-center">
              <img src="src/assets/Images/Cloud.svg" alt="icon" className="w-6 h-6 mr-2"/>
              <p className="text-sm">17% less carbon emissions</p>
            </div>
            <div className="flex items-center">
              <img src="src/assets/Images/Buttol.svg" alt="icon" className="w-6 h-6 mr-2"/>
              <p className="text-sm">86% less plastic pollution</p>
            </div>
            <p className="text-sm text-left"><b>₹ {product.price}</b></p>
          </div>
        </div>
      ))}
      {selectedProduct && (
        <ProductPopup product={selectedProduct} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default Display_limit;