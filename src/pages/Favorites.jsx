import React, { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import MovieList from '../components/MovieList';
import '../styles/Favorites.css';

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="favorites-page">
      <div className="favorites-header">
        <h1>My Favorite Movies</h1>
        {favorites.length > 0 && (
          <p className="favorites-count">
            You have {favorites.length} favorite movie{favorites.length !== 1 ? 's' : ''}
          </p>
        )}
      </div>
      {favorites.length === 0 ? (
        <div className="empty-favorites">
          <p>You haven't added any favorite movies yet.</p>
          <p>Go to Home and click the heart icon to add movies to your favorites!</p>
        </div>
      ) : (
        <MovieList movies={favorites} loading={false} error={null} />
      )}
    </div>
  );
};

export default Favorites;
