export default function MovieFilter({ filter, setFilter }) {
  return (
    <div style={{ margin: '1rem 0' }}>
      <input
        type="text"
        placeholder="Filtrer par titre..."
        value={filter.title}
        onChange={(e) => setFilter({ ...filter, title: e.target.value })}
      />
      <input
        type="number"
        placeholder="Note minimum"
        value={filter.rating}
        onChange={(e) => setFilter({ ...filter, rating: Number(e.target.value) })}
        min="0"
        max="10"
        style={{ marginLeft: 10 }}
      />
    </div>
  );
}
