
import React from 'react';
import MovieCard from './MovieCard';
import moviesData from './moviesData.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Movie List</h1>
      <div className="movie-container">
        {moviesData.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
