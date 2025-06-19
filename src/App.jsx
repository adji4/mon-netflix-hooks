import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieFilter from './components/MovieFilter';
import AddMovieForm from './components/AddMovieForm';
import MovieDetails from './components/MovieDetails';

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Inception',
      description: 'Un thriller de science-fiction',
      posterURL: 'https://example.com/inception.jpg',
      rating: 8.8,
      trailerLink: 'https://www.youtube.com/embed/YoHD9XEInc0'
    },
    {
      id: 2,
      title: 'The Dark Knight',
      description: 'Batman contre le Joker',
      posterURL: 'https://example.com/darkknight.jpg',
      rating: 9,
      trailerLink: 'https://www.youtube.com/embed/EXeTwQWrcwY'
    }
  ]);

  const [filter, setFilter] = useState({ title: '', rating: 0 });

  const handleAddMovie = (newMovie) => {
    const newId = movies.length + 1;
    setMovies([...movies, { ...newMovie, id: newId }]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.rating >= filter.rating
  );

  return (
    <BrowserRouter>
      <div style={{ padding: '2rem' }}>
        <h1>🎬 Ma bibliothèque cinéma</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MovieFilter filter={filter} setFilter={setFilter} />
                <AddMovieForm onAdd={handleAddMovie} />
                <MovieList movies={filteredMovies} />
              </>
            }
          />
          <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
