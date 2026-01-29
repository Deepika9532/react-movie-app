import { useState, useEffect } from 'react';
import { 
  getPopularMovies, 
  getTopRatedMovies, 
  getNowPlayingMovies, 
  searchMovies 
} from '../services/movieApi';

export const useMovies = (category = 'popular', searchQuery = '') => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);

        let data;
        
        if (searchQuery) {
          data = await searchMovies(searchQuery, page);
        } else {
          switch (category) {
            case 'top_rated':
              data = await getTopRatedMovies(page);
              break;
            case 'now_playing':
              data = await getNowPlayingMovies(page);
              break;
            case 'popular':
            default:
              data = await getPopularMovies(page);
              break;
          }
        }

        setMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (err) {
        setError(err.message || 'Failed to fetch movies');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [category, searchQuery, page]);

  const nextPage = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setPage(pageNumber);
    }
  };

  return {
    movies,
    loading,
    error,
    page,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
  };
};