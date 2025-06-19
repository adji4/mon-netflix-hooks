import { useParams, Link } from 'react-router-dom';

function MovieDetails({ movies }) {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <h2>Film introuvable</h2>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerLink}
        title="Bande-annonce"
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/">⬅ Retour à l'accueil</Link>
    </div>
  );
}

export default MovieDetails;
