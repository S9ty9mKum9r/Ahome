import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const [images, setImages] = useState([]);

  const api = "https://63c9b142320a0c4c954daee6.mockapi.io/products";

  const fetchImages = async () => {
    try {
      const response = await fetch(api);
      const data = await response.json();
      setImages(data.map(product => product.image));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Add this option for automatic sliding
    autoplaySpeed: 3000, // Set the speed (in milliseconds) for each slide
  };

  return (
    <div className="image-slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div id='slide' key={index}>
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
