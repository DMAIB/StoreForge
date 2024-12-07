// AdminPanel.js
import React, { useState } from 'react';
import { useCart } from './CartContext';
import './AdminPanel.css'; // Импортируем CSS

const AdminPanel = () => {
  const { addProduct } = useCart();
  const [newProduct, setNewProduct] = useState({
    id: '',
    name: '',
    price: '',
    description: '',
    imageUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newProduct.id || !newProduct.name || !newProduct.price || !newProduct.imageUrl) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }

    addProduct(newProduct);
    setNewProduct({ id: '', name: '', price: '', description: '', imageUrl: '' });
  };

  return (
    <div className="admin-panel">
      <h2>Добавить новый продукт</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="id"
          placeholder="ID"
          value={newProduct.id}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Название"
          value={newProduct.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="price"
          placeholder="Цена"
          value={newProduct.price}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Описание"
          value={newProduct.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="URL изображения"
          value={newProduct.imageUrl}
          onChange={handleChange}
          required
        />
        <button type="submit">Добавить продукт</button>
      </form>
    </div>
  );
};

export default AdminPanel;
