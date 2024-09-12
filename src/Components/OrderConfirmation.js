import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate instead of useHistory
import './OrderConfirmation.css';

const OrderConfirmation = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleReturnToHome = () => {
    navigate('/'); // Navigate back to home page
  };

  return (
    <div className="order-confirmation">
      <h1>Thank You for Your Purchase!</h1>
      <p>Your order has been successfully placed and is being processed.</p>
      <button onClick={handleReturnToHome}>Return to Home</button>
    </div>
  );
};

export default OrderConfirmation;
