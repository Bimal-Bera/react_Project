import React from 'react';
import PropTypes from 'prop-types';

const CartPage = ({ cartItems, removeFromCart }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b py-4">
              <div className="flex items-center">
                <img src={item.banner} alt={item.title} className="w-16 h-16 object-cover mr-4" />
                <div>
                  <h2 className="font-bold">{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
              <div>
                <p className="font-bold">Price: ₹{item.price}</p>
                <button className="text-red-500 hover:text-red-700" onClick={() => removeFromCart(item)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-8">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

CartPage.propTypes = {
  cartItems: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default CartPage;
