import React, { useState, useEffect, useRef } from "react";
import Styles from "./Gallery.module.css";
import { descriptions } from "../../Data/galleryInfo";
import { getImageUrl } from "../../utils";

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const swipeThreshold = 50; // Minimum swipe distance to trigger a slide change

  // Check if the screen size is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Automatically change slides every 3 seconds on mobile
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000); // 3 seconds interval

      return () => clearInterval(interval);
    }
  }, [isMobile]);

  const handleImageClick = (item) => {
    setSelectedImage(item);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  // Swipe handling functions
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;

    // Check if swipe distance is enough to consider as a swipe
    if (swipeDistance > swipeThreshold) {
      // Swiped left
      nextSlide();
    } else if (swipeDistance < -swipeThreshold) {
      // Swiped right
      prevSlide();
    }

    // Reset touch positions
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === descriptions.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? descriptions.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={Styles.galleryContainer} id="gallery">
      <h1 className={Styles.title}>Gallery</h1>

      {/* Grid layout for larger screens */}
      {!isMobile && (
        <div className={Styles.imageGrid}>
          {descriptions.map((item, index) => (
            <div
              key={index}
              className={Styles.imageItem}
              onClick={() => handleImageClick(item)}
            >
              <img
                src={getImageUrl(`gallery/img_${item.id}.jpg`)}
                alt={`Image ${item.id}`}
                className={Styles.image}
              />
              <p className={Styles.description}>{item.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Slider for mobile screens */}
      {isMobile && (
        <div
          className={Styles.slider}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={Styles.sliderItem}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {descriptions.map((item, index) => (
              <div
                className={Styles.mobileImageItem}
                key={index}
                onClick={() => handleImageClick(item)}
              >
                <img
                  src={getImageUrl(`gallery/img_${item.id}.jpg`)}
                  alt={`Image ${item.id}`}
                  className={Styles.image}
                />
                <p className={Styles.mobDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Full image overlay */}
      {selectedImage && (
        <div className={Styles.overlay} onClick={closeImage}>
          <button className={Styles.closeButton} onClick={closeImage}>
            ✖
          </button>
          <img
            src={getImageUrl(`gallery/img_${selectedImage.id}.jpg`)}
            alt={`Image ${selectedImage.id}`}
            className={Styles.fullImage}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
