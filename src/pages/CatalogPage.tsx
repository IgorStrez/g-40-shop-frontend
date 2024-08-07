// src/pages/Catalog.tsx
import ProductDetails from '../components/ProductDetails';

const sampleProducts = [
  { id: 1, name: 'Книга', description: 'Том №1', price: 500, imageUrl: 'link-to-image1.jpg' },
  { id: 2, name: 'Сувенир', description: 'Кружка СПМ', price: 300, imageUrl: 'link-to-image2.jpg' },
  { id: 3, name: 'Театральный билет', description: 'Билет в Театр', price: 400, imageUrl: 'url_to_some_image' },
  // Добавить другие продукты
];

const Catalog = () => {
  return (
    <div className="container">
      <h2>Каталог</h2>
      <div className="row">
        {sampleProducts.map(product => (
          <div className="col-md-4" key={product.id}>
            <ProductDetails {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
