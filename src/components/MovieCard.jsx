// Alors ici on exporte les card pour pouvoir lister les movies//
export default function MovieCard({ movie }) {
  return (
    <div style={{ border: '1px solid #ccc', margin: 10, padding: 10 }}>
      <h3>{movie.title}</h3>
      <img src={movie.posterURL} alt={movie.title} width="150" />
      <p>{movie.description}</p>
      <p>Note : {movie.rating}/10</p>
    </div>
  );
}