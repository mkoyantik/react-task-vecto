import React, { useState, useEffect } from 'react';
import Menu from '../components/Menu/Menu';
import FeaturedMovie from '../components/FeaturedMovie/FeaturedMovie';
import TrendingNow from '../components/TrendingNow/TrendingNow';

import movieData from '../data/movies.json';
import './Pages.css';

const Home = () => {
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const lastSeenId = sessionStorage.getItem('lastSeenMovie');
    const sortedMovies = [...movieData]
      .sort((a, b) => {
        if (lastSeenId && a.id === parseInt(lastSeenId)) return -1;
        if (lastSeenId && b.id === parseInt(lastSeenId)) return 1;
        return new Date(b.createdAt) - new Date(a.createdAt);
      })
      .slice(0, 50);
    
    setTrendingMovies(sortedMovies);
    setFeaturedMovie(
      lastSeenId 
        ? movieData.find(movie => movie.id === parseInt(lastSeenId)) || sortedMovies[0] 
        : sortedMovies[0]
    );
  }, []);

  const handleMovieClick = (movie) => {
    sessionStorage.setItem('lastSeenMovie', movie.id);
    setFeaturedMovie(movie);
  };

  if (!featuredMovie) return <div className="loading">Loading...</div>;

  return (
    <div className="home-page">
      <Menu />
      <FeaturedMovie movie={featuredMovie} />
      <TrendingNow movies={trendingMovies} onMovieClick={handleMovieClick} />
      
    </div>
  );
};

export default Home;