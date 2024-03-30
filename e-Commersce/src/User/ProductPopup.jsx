import PropTypes from 'prop-types';

const ProductPopup = ({ product, onClose }) => {
  // const { addToCart } = useCart();
  // const history = useHistory();

  const handleAddToCart = () => {
    // addToCart(product);
    // onClose(); 
    // history.push('/cart');
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-900 opacity-50" onClick={onClose}></div>
      <div className="relative bg-white p-8 max-w-md rounded-lg shadow-lg">
        <button className="absolute top-0 right-0 p-2 text-lg" onClick={onClose}>×</button>
        <img src={product.banner} alt={product.title} className="w-full h-auto" />
        <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
        <p className="text-gray-700 mb-4">{product.description.substring(0, 100)}</p>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Price: ₹{product.price}</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

ProductPopup.propTypes = {
  product: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProductPopup;
