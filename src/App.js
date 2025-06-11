import { useState } from 'react';
import MovieList from './components/MovieList';
import MovieFilter from './components/MovieFilter';
import AddMovieForm from './components/AddMovieForm';

function App() {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'Un thriller de science-fiction',
      posterURL: 'https://image.tmdb.org/t/p/w200/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg',
      rating: 8.8
    },
    {
      title: 'The Dark Knight',
      description: 'Batman contre le Joker',
      posterURL: 'https://image.tmdb.org/t/p/w200/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
      rating: 9
    }
  ]);

  const [filter, setFilter] = useState({ title: '', rating: 0 });

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.rating >= filter.rating
  );

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🎬 Ma bibliothèque cinéma</h1>
      <MovieFilter filter={filter} setFilter={setFilter} />
      <AddMovieForm onAdd={handleAddMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
