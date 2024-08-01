// src/components/ProductCard.tsx
import { useContext } from 'react';
import { CartContext } from '../contectx/CartContext';

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, description, price }) => {
  const cartContext = useContext(CartContext);

  const handleAddToCart = () => {
    if (cartContext) {
      cartContext.addToCart({ id, name, price, quantity: 1 });
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><strong>{price}</strong></p>
        <button className="btn btn-primary" onClick={handleAddToCart}>Добавить в корзину</button>
      </div>
    </div>
  );
};

export default ProductCard;
