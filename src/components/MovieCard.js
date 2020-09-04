import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className='movie-card'>
      <div className='overlay'></div>
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt='img'
        />
      ) : (
        <div className='filter-poster_path'></div>
      )}
    </div>
  );
};
export default MovieCard;
