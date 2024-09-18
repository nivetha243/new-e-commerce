import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import OfferSlider from './Components/OfferSlider';
import ProductList from './Components/ProductList';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import ProductDetail from './Components/ProductDetail'; // Ensure file name matches
import Checkout from './Components/Checkout';
import OrderConfirmation from './Components/OrderConfirmation';
import SignUp from './Components/SignUp';
import Login from './Components/Login'; // Import LoginPage
import Cart from './Components/Cart';
import { CartProvider } from './context/CartContext'; // Import CartProvider
import Erasers from './Components/Erasers';
import './App.css';


function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <OfferSlider />
                <ProductList />
                <AboutUs />
                <Footer />
              </>
            } />
            <Route path="/product/:productName" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} /> {/* Route for Login */}
            <Route path="/cart" element={<Cart />} /> {/* Use lowercase for paths */}
            <Route path="/erasers" element={<Erasers/>} /> 
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
