import React from 'react';
import './CakeCard.css';

function CakeCard({ cake }) {
  return (
    <div className="cake-card">
      <img src={cake.imageUrl} alt={cake.name} className="cake-image" />
      <div className="cake-info">
        <h3 className="cake-name">{cake.name}</h3>
        <p className="cake-description">{cake.description}</p>
        <button className="order-button">Order Now</button>
      </div>
    </div>
  );
}

export default CakeCard;
