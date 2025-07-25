import React, { useState, useEffect, useRef } from 'react';
import './TrendingNow.css';
import airche from '../../assets/https_specials-1.png';
import sanandreas from '../../assets/https_specials-2.png';
import gooddoctor from '../../assets/https_specials-3.png';
import rednotice from '../../assets/https_specials-4.png';
import tatnibal from '../../assets/https_specials-6.png';
import sherlock from '../../assets/https_specials-7.png';

const TrendingNow = () => {
  const trendingItems = [
    { id: 1, image: airche },
    { id: 2, image: tatnibal },
    { id: 3, image: sherlock },
    { id: 4, image: rednotice },
    { id: 5, image: gooddoctor },
    { id: 6, image: sanandreas },
    { id: 7, image: airche },
    { id: 8, image: tatnibal }
  ];

  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemWidth = 220; 
  const gap = 15; 
  const visibleItems = 5; 
  const scrollAmount = itemWidth + gap; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        if (prev >= trendingItems.length - visibleItems) {
          return 0; 
        }
        return prev + 1; 
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [trendingItems.length]);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
      carouselRef.current.style.transform = `translateX(-${currentIndex * scrollAmount}px)`;
    }
  }, [currentIndex]);

  return (
    <div className="trending-section">
      <h2 className="section-title">Trending Now</h2>
      <div className="trending-carousel-container">
        <div className="trending-carousel" ref={carouselRef}>
          {trendingItems.map((item, index) => (
            <div 
              key={`${item.id}-${index}`}
              className="trending-item"
            >
              <img src={item.image} alt={item.title} className="trending-image" />
              <div className="trending-title">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingNow;