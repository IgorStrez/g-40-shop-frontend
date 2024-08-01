// src/pages/CartPage.tsx
import { useContext } from 'react';
import { CartContext } from '../contectx/CartContext';

const CartPage = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) return null;

  return (
    <div className="container py-5">
      <h1>Корзина</h1>
      <ul className="list-group mb-3">
        {cartContext.cart.map((product, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>{product.name}</h5>
              <p>{product.price}</p>
            </div>
          </li>
        ))}
      </ul>
      <p><strong>Итого:</strong> {/* Вычислить и отобразить общую стоимость */}</p>
    </div>
  );
};

export default CartPage;
