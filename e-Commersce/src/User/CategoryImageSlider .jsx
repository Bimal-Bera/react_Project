import categoriesData from '../assets/Product/Category_Image.js'

const CategoryImageSlider = () => {

    return (
        <div>
          <h1>Categories</h1>
          <div>
            {categoriesData.map(category => (
              <div key={category.id}>
                <h2>{category.name}</h2>
                <img src={category.image} alt={category.name} />
              </div>
            ))}
          </div>
        </div>
      );
}
export default CategoryImageSlider
