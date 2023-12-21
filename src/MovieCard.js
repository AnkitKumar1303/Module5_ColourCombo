// src/MovieCard.js
import React from 'react';
import PropTypes from 'prop-types';

function MovieCard({ title, subtitle, imageUrl, releaseYear, duration, genres, description }) {
  return (
    <div className="movie-card">
      <img src={imageUrl} alt={title} />
      <div className="movie-details">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          <strong>Release Year:</strong> {releaseYear}
        </p>
        <p>
          <strong>Duration:</strong> {duration} minutes
        </p>
        <p>
          <strong>Genres:</strong> {genres.join(', ')}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
};

export default MovieCard;
