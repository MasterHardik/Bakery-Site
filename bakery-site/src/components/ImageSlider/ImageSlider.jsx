import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="slider">
        {images.map((image, index) => (
          <div
            key={index}
            className="slide"
            style={{ opacity: index === currentIndex ? 1 : 0 }}
          >
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageSlider;
