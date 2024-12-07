import React from 'react';
import './Products.css';
import { useCart } from './CartContext'; // Импортируем контекст корзины

const Products = () => {
  const { addToCart, products } = useCart(); // Получаем функцию добавления в корзину и список продуктов

  return (
    <div>
      <h2>Товары от StoryForge</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <div className="product-info">
              <p className="product-price">{product.price}</p>
              <p className="product-description">{product.description}</p>
            </div>
            <button onClick={() => addToCart(product)} className="add-to-cart-button">Добавить в корзину</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;


