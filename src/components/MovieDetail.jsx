import React, { useEffect, useState, useContext } from 'react';
import { getMovieDetails, getImageUrl } from '../services/movieApi';
import { FavoritesContext } from '../context/FavoritesContext';
import '../styles/MovieDetail.css';

const MovieDetail = ({ movieId }) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isFavorite, addFavorite, removeFavorite } = useContext(FavoritesContext);
  const favorite = isFavorite(parseInt(movieId));

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (err) {
        setError('Failed to load movie details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [movieId]);

  const handleFavoriteClick = () => {
    if (favorite) {
      removeFavorite(parseInt(movieId));
    } else {
      addFavorite(movie);
    }
  };

  if (loading) return <div className="detail-loading">Loading...</div>;
  if (error) return <div className="detail-error">{error}</div>;
  if (!movie) return <div className="detail-error">Movie not found</div>;

  return (
    <div className="movie-detail">
      <div className="detail-backdrop">
        {movie.backdrop_path && (
          <img
            src={getImageUrl(movie.backdrop_path)}
            alt={movie.title}
            className="backdrop-image"
          />
        )}
      </div>
      <div className="detail-content">
        <div className="detail-poster">
          <img
            src={getImageUrl(movie.poster_path) || 'https://via.placeholder.com/500x750?text=No+Image'}
            alt={movie.title}
            className="poster-image"
          />
        </div>
        <div className="detail-info">
          <h1 className="detail-title">{movie.title}</h1>
          <div className="detail-meta">
            <span className="rating">⭐ {movie.vote_average?.toFixed(1)} / 10</span>
            <span className="release-date">{movie.release_date}</span>
            <span className="runtime">{movie.runtime} min</span>
          </div>
          <div className="genres">
            {movie.genres?.map((genre) => (
              <span key={genre.id} className="genre-tag">
                {genre.name}
              </span>
            ))}
          </div>
          <p className="overview">{movie.overview}</p>
          <button
            className={`detail-favorite-btn ${favorite ? 'active' : ''}`}
            onClick={handleFavoriteClick}
          >
            {favorite ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
          </button>
          {movie.credits?.cast?.length > 0 && (
            <div className="cast-section">
              <h3>Cast</h3>
              <div className="cast-list">
                {movie.credits.cast.slice(0, 5).map((actor) => (
                  <div key={actor.id} className="cast-item">
                    {actor.profile_path && (
                      <img
                        src={getImageUrl(actor.profile_path)}
                        alt={actor.name}
                        className="cast-image"
                      />
                    )}
                    <p className="cast-name">{actor.name}</p>
                    <p className="cast-character">{actor.character}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
