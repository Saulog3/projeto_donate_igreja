import React, { useState } from "react";
import "./Carousel.css";

const images = [
  "/images/banner1.png",
  "/images/banner2.png",
  "/images/banner3.png"
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="carousel-container">
      <button className="prev-btn" onClick={prevSlide}>&#10094;</button>

      <div className="carousel-slide">
        <img src={images[current]} alt="Slide" className="carousel-image" />
      </div>

      <button className="next-btn" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Carousel;
