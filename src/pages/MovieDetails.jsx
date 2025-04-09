import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Cast from '../components/Cast';
import { fetchMovieDetails, fetchMovieCast } from '../utils';
import '../index.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const movieData = await fetchMovieDetails(id);
      const castData = await fetchMovieCast(id);
      
      if (movieData) setMovie(movieData);
      if (castData) setCast(castData);
      
      setLoading(false);
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!movie) {
    return <div className="error">Movie not found</div>;
  }

  return (
    <div className="movie-details">
      {/* <div className="movie-backdrop">
        {movie.backdrop_path && (
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={movie.title}
          />
        )}
      </div> */}
      <div className="movie-content">
        <div className="movie-poster">
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : 'https://via.placeholder.com/500x750?text=No+Poster'
            }
            alt={movie.title}
          />
        </div>
        <div className="movie-info">
          <h1 className="movie-title">
            {movie.title} ({movie.release_date.substring(0, 4)})
          </h1>
          <div className="movie-meta">
            <span className="movie-rating">
              Rating {movie.vote_average.toFixed(1)}/10
            </span>
            <span className="movie-runtime">{movie.runtime} mins</span>
            <div className="movie-genres">
              {movie.genres.map((genre) => (
                <span key={genre.id} className="genre-tag">
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
          <h3 className="section-title">Overview</h3>
          <p className="movie-overview">{movie.overview}</p>
          <Cast cast={cast} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;