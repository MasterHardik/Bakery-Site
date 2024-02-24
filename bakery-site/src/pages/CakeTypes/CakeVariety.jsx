import React from "react";
import "./CakeVariety.css";

function CakeVariety({ Categories }) {
  return (
    <section className="cake-category-section">
      {Categories.map((category, index) => (
        <a href={`#c${index + 1}`} className="category-button">
          <button
            key={index}
            className="category-btn"
            // onClick={`#c${index + 1}`}
          >
            {category}
          </button>
        </a>
      ))}
    </section>
  );
}

export default CakeVariety;
