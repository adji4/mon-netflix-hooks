import { useState } from 'react';

export default function AddMovieForm({ onAdd }) {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(newMovie);
    setNewMovie({ title: '', description: '', posterURL: '', rating: 0 });
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '1rem 0' }}>
      <input placeholder="Titre" value={newMovie.title} onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })} />
      <input placeholder="URL d'affiche" value={newMovie.posterURL} onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })} />
      <input placeholder="Description" value={newMovie.description} onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })} />
      <input type="number" min="0" max="10" value={newMovie.rating} onChange={(e) => setNewMovie({ ...newMovie, rating: Number(e.target.value) })} />
      <button type="submit">Ajouter</button>
    </form>
  );
}
