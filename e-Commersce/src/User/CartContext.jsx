import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Add prop validation for children
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};


