import React, { useState } from 'react';
import './Carousel.css'
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="carouselContainer">
      <img className="carousel-image" src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />

      <div className='carousel-buttons'>
        <button onClick={prevImage} className="prev-button"><GrLinkPrevious /></button>
        <p>Page {currentImageIndex + 1}/{images.length}</p>
        <button onClick={nextImage} className="next-button"><GrLinkNext /></button>
      </div>
    </div>
);
};

export default Carousel;