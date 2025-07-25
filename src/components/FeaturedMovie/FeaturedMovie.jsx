import React, { useState } from 'react';
import './FeaturedMovie.css';
import { FaPlay } from "react-icons/fa";
import featuredImage from '../../assets/FeaturedCoverImage.png';
import irishmanname from '../../assets/FeaturedTitleImage.png'

const FeaturedMovie = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="featured-container">
      <img src={featuredImage} alt="The Irishman" className="background-image" />
      
      <div className="movie-content">
        <div className="movie-info">
          <span className="category">MOVIE</span>
          
          <h1 className="movie-title">
              <img src={irishmanname} alt="" />
          </h1>
          
          <div className="movie-meta">
            <span>2021</span>
            <span className="age-rating">18+</span>
            <span>1h48m</span>
          </div>
          
          <p className="movie-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          
          <div className="action-buttons">
            <button className="play-button" onClick={() => setIsPlaying(true)}>
              <FaPlay className='icon-play'/>
              Play
            </button>
            <button className="info-button">
              More Info
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FeaturedMovie;