import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../context/FavoritesContext';
import { getImageUrl } from '../services/movieApi';
import '../styles/MovieCard.css';

const MovieCard = ({ movie }) => {
  const { isFavorite, addFavorite, removeFavorite } = useContext(FavoritesContext);
  const favorite = isFavorite(movie.id);

  const handleFavoriteClick = () => {
    if (favorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`} className="movie-image-link">
        <img
          src={getImageUrl(movie.poster_path) || 'https://via.placeholder.com/500x750?text=No+Image'}
          alt={movie.title}
          className="movie-image"
        />
      </Link>
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-rating">⭐ {movie.vote_average?.toFixed(1)}</p>
        <p className="movie-date">{movie.release_date?.split('-')[0]}</p>
        <button
          className={`favorite-btn ${favorite ? 'active' : ''}`}
          onClick={handleFavoriteClick}
          title={favorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {favorite ? '❤️' : '🤍'}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
