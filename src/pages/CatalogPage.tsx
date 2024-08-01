// src/pages/Catalog.tsx
import ProductDetails from '../components/ProductDetails';

const sampleProducts = [
  { id: 1, name: 'Книга 1', description: 'Описание книги 1', price: 500, imageUrl: 'link-to-image1.jpg' },
  { id: 2, name: 'Сувенир 1', description: 'Описание сувенира 1', price: 300, imageUrl: 'link-to-image2.jpg' },
  // Добавьте другие продукты
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
