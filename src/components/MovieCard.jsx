import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem', width: 200 }}>
      <img src={movie.posterURL} alt={movie.title} width="100%" />
      <h3>{movie.title}</h3>
      <p>⭐ {movie.rating}</p>
      
      {/* 🔗 Lien vers la page de détails du film */}
      <Link to={`/movie/${movie.id}`}>Voir la description</Link>
    </div>
  );
}

export default MovieCard;
