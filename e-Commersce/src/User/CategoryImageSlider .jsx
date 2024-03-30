import category from '../assets/Product/Category_Image.js';

const CategoryImageSlider = () => {
  return (
    
    <div className="flex overflow-x-auto">
      {category.map((category, index) => (
        <div key={index} className="flex-shrink-0 mr-4">
          <img src={category.image} alt={category.name} className="w-32 h-32 object-cover rounded-full" />
          <p className="text-center">{category.name}</p>
        </div>
      ))}
    </div>
  );
};
export default CategoryImageSlider
