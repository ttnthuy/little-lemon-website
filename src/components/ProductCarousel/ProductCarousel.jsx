import React, { useEffect, useCallback, useState } from "react";
import styles from "./ProductCarousel.module.css";
import { products } from "../../data/products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../ProductCard/ProductCard";
const ProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const maxSlides = Math.max(0, products.length - cardsPerView);

  const getCardsPerView = useCallback(() => {
    if (window.innerWidth >= 1200) return 4;
    if (window.innerWidth >= 900) return 3;
    if (window.innerWidth >= 600) return 2;
    return 1;
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextSlide = () => {
    if (currentSlide < maxSlides) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const newCardsPerView = getCardsPerView();
      setCardsPerView(newCardsPerView);
      setCurrentSlide((prev) =>
        Math.min(prev, Math.max(0, products.length - newCardsPerView))
      );
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getCardsPerView]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev >= maxSlides) return 0;
        return prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxSlides]);

  return (
    <section
      className={styles.carouselWrapper}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div
        className={styles.carouselTrack}
        style={{ transform: `translateX(-${currentSlide * 310}px)` }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className={styles.carouselNav}>
        <button
          className={styles.navBtn}
          disabled={currentSlide === 0}
          onClick={handlePrevSlide}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className={styles.carouselIndicators}>
          {Array.from({ length: maxSlides + 1 }, (_, index) => (
            <div
              key={index}
              className={`${styles.carouselIndicator} ${
                index === currentSlide ? styles.active : ""
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        <button
          className={styles.navBtn}
          disabled={currentSlide >= maxSlides}
          onClick={handleNextSlide}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
};

export default ProductCarousel;
