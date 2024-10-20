import React, { useState, useEffect } from "react";
import Styles from "./Blog.module.css";
import blogInfo from "../../Data/blogInfo";

export const Blog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === blogInfo.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? blogInfo.length - 1 : prevIndex - 1
    );
  };

  // Add auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={Styles.carouselContainer}>
      <div
        className={Styles.carousel}
        style={{
          backgroundImage: `url(${blogInfo[currentIndex].image})`,
        }}
      >
        <div className={Styles.content}>
          <h2 className={Styles.title}>{blogInfo[currentIndex].title}</h2>
          <p className={Styles.description}>{blogInfo[currentIndex].content}</p>
        </div>

        <button className={Styles.prevBtn} onClick={handlePrev}>
          &#10094;
        </button>
        <button className={Styles.nextBtn} onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Blog;
