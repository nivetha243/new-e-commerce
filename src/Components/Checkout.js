// Checkout.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Replace useHistory with useNavigate
import './Checkout.css';

const Checkout = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    cardDetails: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission and order placement
    console.log('Order placed:', formData);

    // Navigate to Order Confirmation page
    navigate('/order-confirmation'); // Use navigate instead of history.push
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Card Details:</label>
          <input
            type="text"
            name="cardDetails"
            value={formData.cardDetails}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="place-order-btn">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
