import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

const ResultCard = ({ movie }) => {
  const { addToWatchList, watchlist, addToWatched, watched } = useContext(
    GlobalContext
  );

  let watchDisabled = watchlist.find(ob => ob.id === movie.id);
  let disabledButton = watchDisabled ? true : false;
  let watchedDisabled = watched.find(ob => ob.id === movie.id);
  let disabledButtonWatched = watchedDisabled ? true : false;
  return (
    <div className='result-card'>
      <div className='poster-wrapper'>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt='img'
          />
        ) : (
          <div className='filter-poster_path'></div>
        )}
      </div>
      <div className='info'>
        <div className='header'>
          <h3 className='title'>{movie.title}</h3>
          <h4 className='release-date'>{movie.release_date}</h4>
        </div>
        <div className='controls'>
          <button
            disabled={disabledButton}
            className='btn'
            onClick={() => addToWatchList(movie)}
          >
            Add to WatchList
          </button>
          <button
            disabled={disabledButtonWatched}
            className='btn'
            onClick={() => addToWatched(movie)}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};
export default ResultCard;
