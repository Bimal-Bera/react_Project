import { useState } from 'react';
import products from '../assets/Product/product.js';

const ProductCard = ({ product }) => (
  <div className="bg-white p-4 shadow rounded-lg">
    <img src={product.banner} className="w-50"/>
    <h6 className="text-lg font-semibold">{product.title}...</h6>

    <span style={{display:"flex",marginLeft:"10px",marginTop:"10px"}}>
        <img src="src/assets/Images/Cloud.svg" alt="icon" style={{width:"30px"}}/>
            <p style={{color:"black"}}>17% less carbon emissions</p>
    </span>

    <span style={{display:"flex",marginLeft:"10px",marginTop:"10px"}}>
        <img src="src/assets/Images/Buttol.svg" style={{width:"30px"}} alt="icon"/>
        <p style={{color:"black"}}>86% less plastic pollution</p>
    </span>

    <span style={{display:"flex",marginLeft:"10px",marginTop:"10px"}}>
        <p style={{color:"black"}}><b>₹ {product.price}</b></p>
    </span>
  </div>
);

const ProductList = ({ products }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {products.map(product => (
      <ProductCard key={product.titel} product={product} /> 
    ))}
  </div>
);

const Product = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
      />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default Product;
