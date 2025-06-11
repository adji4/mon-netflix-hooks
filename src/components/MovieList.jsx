// On importe le movie card pour faire la liste des movies//

import MovieCard from './MovieCard';

export default function MovieList({ movies }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
}