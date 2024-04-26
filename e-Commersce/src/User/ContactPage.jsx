import React from 'react';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Address:</h2>
          <p>123 Main Street</p>
          <p>City, State 12345</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Phone:</h2>
          <p>(123) 456-7890</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Send us a message:</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1" htmlFor="name">Name:</label>
            <input className="border border-gray-300 rounded-md w-96 px-3 py-2" type="text" id="name" name="name" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1" htmlFor="email">Email:</label>
            <input className="border border-gray-300 rounded-md w-96 px-3 py-2" type="email" id="email" name="email" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1" htmlFor="message">Message:</label>
            <textarea className="border border-gray-300 rounded-md w-96 px-3 py-2" id="message" name="message" rows="5"></textarea>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md" type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
