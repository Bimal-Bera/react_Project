import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import ProductList from './ProductList';

const SellerProducts = ({ sellerId }) => {
  const [seller, setSeller] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch seller data based on sellerId
    const fetchSellerData = async () => {
      try {
        // Make API call or fetch data using sellerId
        // For demonstration, I'm using dummy data
        const dummySellerData = { id: sellerId, name: 'Seller Name', email: 'seller@example.com' };
        setSeller(dummySellerData);

        // Fetch products for the specific seller
        // For demonstration, I'm using dummy product data
        const dummyProducts = [
          { id: 1, name: 'Product 1', price: 10 },
          { id: 2, name: 'Product 2', price: 20 },
          { id: 3, name: 'Product 3', price: 15 },
        ];
        setProducts(dummyProducts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchSellerData();
  }, [sellerId]);

  if (!seller) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Seller: {seller.name}</h1>
      <p>Email: {seller.email}</p>
      <h2 className="text-xl font-semibold mt-4">Products:</h2>
      <ProductList products={products} />
    </div>
  );
};

// Define prop types for SellerModule
SellerProducts.propTypes = {
  sellerId: PropTypes.number.isRequired,
};

export default SellerProducts;
