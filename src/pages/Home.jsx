import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import { useMovies } from '../hooks/useMovies';
import '../styles/Home.css';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const {
    movies,
    loading,
    error,
    page,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
  } = useMovies(searchQuery ? '' : 'popular', searchQuery);

  const handleSearch = (query) => {
    setSearchQuery(query);
    goToPage(1); // Reset to page 1 when searching
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    goToPage(1);
  };

  const handlePreviousPage = () => {
    prevPage();
    window.scrollTo(0, 0);
  };

  const handleNextPage = () => {
    nextPage();
    window.scrollTo(0, 0);
  };

  return (
    <div className="home">
      <SearchBar onSearch={handleSearch} />
      {searchQuery && (
        <div className="search-info">
          <p>Search results for: "{searchQuery}"</p>
          <button onClick={handleClearSearch} className="clear-search-btn">
            Clear Search
          </button>
        </div>
      )}
      <MovieList movies={movies} loading={loading} error={error} />
      {movies.length > 0 && (
        <div className="pagination">
          <button
            onClick={handlePreviousPage}
            disabled={page === 1 || loading}
            className="pagination-btn"
          >
            ← Previous
          </button>
          <span className="pagination-info">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={page === totalPages || loading}
            className="pagination-btn"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;