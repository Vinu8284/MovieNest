import '../index.css';

const Cast = ({ cast }) => {
  return (
    <div className="cast-container">
      <h3 className="cast-heading">Cast</h3>
      <div className="cast-grid">
        {cast.slice(0, 6).map((person) => (
          <div key={person.id} className="cast-member">
            <img
              src={
                person.profile_path
                  ? `https://image.tmdb.org/t/p/w200/${person.profile_path}`
                  : 'https://via.placeholder.com/200x300?text=No+Image'
              }
              alt={person.name}
              className="cast-image"
            />
            <p className="cast-name">{person.name}</p>
            <p className="cast-character">{person.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cast;