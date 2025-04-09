import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';
import { searchMovies } from '../utils';
import '../index.css';

const SearchResults = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    const getSearchParams = () => {
      const searchParams = new URLSearchParams(location.search);
      return {
        query: searchParams.get('query') || '',
        page: parseInt(searchParams.get('page')) || 1,
      };
    };

    const { query: searchQuery, page } = getSearchParams();
    setQuery(searchQuery);
    setCurrentPage(page);

    const fetchResults = async () => {
      setLoading(true);
      if (searchQuery) {
        const data = await searchMovies(searchQuery, page);
        if (data) {
          setMovies(data.results);
          setTotalPages(data.total_pages);
        }
      }
      setLoading(false);
    };

    fetchResults();
  }, [location.search]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="movies-container">
      <h1 className="page-title">
        Search Results for "{query}"
      </h1>
      {movies.length > 0 ? (
        <>
          <div className="movies-grid">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </>
      ) : (
        <div className="no-results">No movies found</div>
      )}
    </div>
  );
};

export default SearchResults;