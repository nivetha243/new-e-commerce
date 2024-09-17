import React, { useState } from 'react';
import './Cart.css'; // Optional, for specific CartPage styles

// Sample data for items in the cart
const initialCartItems = [
  {
    id: 1,
    title: 'Sketchbook',
    price: 12.99,
    quantity: 1,
    imageUrl: 'https://via.placeholder.com/100x100?text=Sketchbook'
  },
  {
    id: 2,
    title: 'Colored Pencils',
    price: 8.99,
    quantity: 2,
    imageUrl: 'https://via.placeholder.com/100x100?text=Colored+Pencils'
  },
  // Add more items as needed
];

function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  // Function to handle quantity change
  const handleQuantityChange = (id, change) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(item.quantity + change, 1) } : item
    ));
  };

  // Function to handle item removal
  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Calculate the total price for each item
  const getItemTotalPrice = (price, quantity) => {
    return (price * quantity).toFixed(2);
  };

  // Calculate the grand total price
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.imageUrl} alt={item.title} className="cart-item-image" />
            <div className="item-details">
              <h2 className="item-title">{item.title}</h2>
              <p className="item-price">${getItemTotalPrice(item.price, item.quantity)}</p>
              <div className="quantity-controls">
                <button 
                  className="quantity-button" 
                  onClick={() => handleQuantityChange(item.id, -1)}
                  disabled={item.quantity <= 1} // Disable '-' button if quantity is 1
                >
                  -
                </button>
                <span className="quantity-display">{item.quantity}</span>
                <button 
                  className="quantity-button" 
                  onClick={() => handleQuantityChange(item.id, 1)}
                >
                  +
                </button>
              </div>
              <button className="remove-button" onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2 className="summary-total">Total: ${getTotalPrice()}</h2>
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
