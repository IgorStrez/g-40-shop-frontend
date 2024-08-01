
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'Книга 1', description: 'Описание книги 1', price: '500₽' },
  { id: 2, name: 'Книга 2', description: 'Описание книги 2', price: '600₽' },
  { id: 3, name: 'Сувенир 1', description: 'Описание сувенира 1', price: '300₽' },
  // Добавьте больше продуктов по необходимости
];

const CatalogPage = () => (
  <div className="container py-5">
    <h1>Каталог</h1>
    <div className="row">
      {products.map(product => (
        <div key={product.id} className="col-md-4 mb-4">
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  </div>
);

export default CatalogPage;
