import { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../assets/Product/product';
import ProductPopup from './ProductPopup';
import Navbar from './Navbar';
import ImageSlider from './ImageSlider';

const Productlist = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { categoryName } = useParams();

  // Filter products based on the categoryName
  const filteredProducts = products.filter(product => product.category === categoryName);
  
  // Handle click on a product
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // Handle closing the product popup
  const handleClosePopup = () => {
    setSelectedProduct(null);
  };

  // Define your images array
  const images = [
    "src/assets/Images/image 9.svg",
    "src/assets/Images/Elephent.svg",
    "src/assets/Images/image 23.svg",
  ];

  return (
    <>
      <Navbar />
      <ImageSlider images={images} />
      <h1>Product Page - {categoryName}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer" onClick={() => handleProductClick(product)}>
            <img src={product.banner} alt={product.title} className="w-full" />
            <div className="px-6 py-4">
              <div className="font-bold mb-2">{product.title}</div>
              <div className="flex items-center">
                <img src="src/assets/Images/Cloud.svg" alt="icon" className="w-6 h-6 mr-2" />
                <p style={{ color: "black" }} className="text-sm">17% less carbon emissions</p>
              </div>
              <div className="flex items-center">
                <img src="src/assets/Images/Buttol.svg" alt="icon" className="w-6 h-6 mr-2" />
                <p style={{ color: "black" }} className="text-sm">86% less plastic pollution</p>
              </div>
              <p style={{ color: "black" }} className="text-sm text-left"><b>₹ {product.price}</b></p>
            </div>
          </div>
        ))}
        {selectedProduct && (
          <ProductPopup product={selectedProduct} onClose={handleClosePopup} />
        )}
      </div>
    </>
  );
};

export default Productlist;
