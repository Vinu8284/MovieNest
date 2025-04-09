import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';
import { fetchTopRatedMovies } from '../utils';
import '../index.css';

const TopRated = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const getPageFromURL = () => {
      const searchParams = new URLSearchParams(location.search);
      return parseInt(searchParams.get('page')) || 1;
    };

    const page = getPageFromURL();
    setCurrentPage(page);

    const fetchMovies = async () => {
      setLoading(true);
      const data = await fetchTopRatedMovies(page);
      if (data) {
        setMovies(data.results);
        setTotalPages(data.total_pages);
      }
      setLoading(false);
    };

    fetchMovies();
  }, [location.search]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="movies-container">
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};

export default TopRated;