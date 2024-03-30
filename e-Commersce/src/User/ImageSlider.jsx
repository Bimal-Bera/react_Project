import React, { useState } from 'react';


const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative">
      <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded" onClick={prevSlide}>
      &lt;
      
      </button>
      <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded" onClick={nextSlide}>
      &gt;
      </button>
      <div className="flex">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-full ${index === currentIndex ? 'block' : 'hidden'} transition-opacity duration-500`}
          >
            <img src={image} alt={`Slide ${index + 1}`} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
