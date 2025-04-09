import { Link } from 'react-router-dom';
import '../index.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : 'https://via.placeholder.com/500x750?text=No+Poster'
          }
          alt={movie.title}
          className="movie-poster"
        />
        <div className="movie-info">
          <h3 className="movie-title">{movie.title}</h3>
          <p className="movie-rating">
            Rating: {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;