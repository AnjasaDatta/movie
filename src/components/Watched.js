import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import MovieCard from './MovieCard';

const Watched = () => {
  const { watched } = useContext(GlobalContext);
  return (
    <div className='movie-page'>
      <div className='container'>
        <div className='header'>
          <h1 className='heading'>My Watched Movies:</h1>
        </div>
        <div className='movie-grid'>
          {watched.map(movie => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Watched;
