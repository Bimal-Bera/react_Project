import React from 'react';
import products from '../assets/Product/product'; // Importing the products data from the file

const ProductCard = ({ product }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg mb-5 mt-5">
    <img className="w-full" src={product.banner} alt={product.title} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{product.title}</div>

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
    {/*<div className="px-6 py-4">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        Price: ${product.price}
      </span>
</div>*/}
  </div>
);

const ProductList = () => {
  // You can directly use the imported products array here
  const limitedProducts = products.slice(0, 6);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {limitedProducts.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
