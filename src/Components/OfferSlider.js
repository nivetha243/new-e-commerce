import React, { useState } from 'react';
import './OfferSlider.css'; // Optional, for specific slider styles

const offers = [
  { img: 'https://via.placeholder.com/600x300?text=Offer+1', title: 'Special Offer 1', description: 'Save 20% on all items' },
  { img: 'https://via.placeholder.com/600x300?text=Offer+2', title: 'Special Offer 2', description: 'Buy one get one free' },
  { img: 'https://via.placeholder.com/600x300?text=Offer+3', title: 'Special Offer 3', description: 'Free shipping on orders over $50' },
  { img: 'https://via.placeholder.com/600x300?text=Offer+4', title: 'Special Offer 4', description: 'Free shipping on orders over $50' },
];

function OfferSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + offers.length) % offers.length);
  };

  return (
    <div className="offer-slider">
      <div className="offer-slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {offers.map((offer, index) => (
          <div className="offer-slide" key={index}>
            <img src={offer.img} alt={`Offer ${index + 1}`} />
            <h2>{offer.title}</h2>
            <p>{offer.description}</p>
          </div>
        ))}
      </div>
      <button className="slider-button prev" onClick={prevSlide}>❮</button>
      <button className="slider-button next" onClick={nextSlide}>❯</button>
    </div>
  );
}

export default OfferSlider;
