// src/pages/ProductDetail.tsx
import { useParams } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();

  // Пример данных о продукте, которые вы можете заменить на данные из вашего API
  const product = {
    id: parseInt(id!, 10),
    name: "Пример книги",
    description: "Описание книги...",
    price: 500,
    imageUrl: "/path/to/image.jpg"
  };

  return (
    <div>
      <ProductDetails
        id={product.id}
        name={product.name}
        description={product.description}
        price={product.price}
        imageUrl={product.imageUrl}
      />
    </div>
  );
};

export default ProductDetail;
