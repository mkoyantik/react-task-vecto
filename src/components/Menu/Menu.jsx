import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import searchIcon from '../../assets/icons/ICON - Search.png';
import homeIcon from '../../assets/icons/Group 46.png';
import tvShowsIcon from '../../assets/icons/Group 56.png';
import moviesIcon from '../../assets/icons/Group 54.png';
import genresIcon from '../../assets/icons/Group 53.png';
import watchLaterIcon from '../../assets/icons/Group 47.png';
import './Menu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: searchIcon, text: 'Search', path: '/search' },
    { icon: homeIcon, text: 'Home', path: '/' },
    { icon: tvShowsIcon, text: 'TV Shows', path: '/tvshows' },
    { icon: moviesIcon, text: 'Movies', path: '/movies' },
    { icon: genresIcon, text: 'Genres', path: '/genres' },
    { icon: watchLaterIcon, text: 'Watch Later', path: '/watchlater' }
  ];

  return (
    <div className={`menu ${isOpen ? 'open' : ''}`} 
         onMouseEnter={() => setIsOpen(true)}
         onMouseLeave={() => setIsOpen(false)}>
      <div className="profile-section">
        <div className="profile-icon">D</div>
        {isOpen && <span className="profile-name">Daniel</span>}
      </div>
      
      <nav>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink to={item.path} className={({ isActive }) => isActive ? 'active' : ''} end>
                <span className="icon-container">
                  <img src={item.icon} alt={item.text} className="menu-icon" />
                </span>
                {isOpen && <span className="menu-text">{item.text}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      {isOpen && (
        <div className="bottom-menu">
          <div>LANGUAGE</div>
          <div>GET HELP</div>
          <div>EXIT</div>
        </div>
      )}
    </div>
  );
};

export default Menu;