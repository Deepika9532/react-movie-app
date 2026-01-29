import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const { favorites } = useFavorites();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          🎬 MovieApp
        </Link>
        <ul className="navbar-menu">
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === '/favorites' ? 'active' : ''}>
            <Link to="/favorites">
              Favorites
              {favorites.length > 0 && (
                <span className="favorites-count">{favorites.length}</span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;