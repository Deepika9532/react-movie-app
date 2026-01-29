import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MovieDetail from '../components/MovieDetail';
import '../styles/MovieDetails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="movie-details-page">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <MovieDetail movieId={id} />
    </div>
  );
};

export default MovieDetails;
