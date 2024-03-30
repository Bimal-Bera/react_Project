import { useState } from 'react';

const CartPage = () => {
  // eslint-disable-next-line
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 15 },
  ]);

  // Function to calculate total price
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-300">
            {cartItems.map(item => (
              <li key={item.id} className="flex justify-between py-2">
                <span>{item.name}</span>
                <span>${item.price}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p className="text-lg font-semibold">Total: ${calculateTotalPrice()}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
