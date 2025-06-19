import MovieCard from './MovieCard';

function MovieList({ movies }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
