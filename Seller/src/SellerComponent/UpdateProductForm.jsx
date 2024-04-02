import { useState } from 'react';

const UpdateProductForm = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
    category: '',
    brand: '',
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setProduct({ ...product, [name]: val });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProduct({ ...product, image: file });

    // Create a FileReader instance
    const reader = new FileReader();

    // Listen to the FileReader's load event
    reader.onload = () => {
      // Set the image preview to the result of FileReader
      setImagePreview(reader.result);
    };

    // Read the uploaded file as data URL
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Update Product</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        {/* Other form fields */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Product Name</label>
          <input type="text" id="name" name="name" value={product.name} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700">Description</label>
          <textarea id="description" name="description" value={product.description} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md"></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700">Price</label>
          <input type="number" id="price" name="price" value={product.price} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-gray-700">Quantity</label>
          <input type="number" id="quantity" name="quantity" value={product.quantity} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700">Category</label>
          <input type="text" id="category" name="category" value={product.category} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="brand" className="block text-gray-700">Brand</label>
          <input type="text" id="brand" name="brand" value={product.brand} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md" />
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700">Product Image</label>
          <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} className="mt-1 p-2 w-full border rounded-md" />
        </div>
        {/* Display image preview if available */}
        {imagePreview && (
          <div className="mb-4">
            <img src={imagePreview} alt="Product" className="max-w-xs mx-auto" />
          </div>
        )}
        
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update Product</button>
      </form>
    </div>
  );
};

export default UpdateProductForm;
