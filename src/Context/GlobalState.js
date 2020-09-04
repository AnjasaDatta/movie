import React, { useReducer, useEffect } from 'react';
import { createContext } from 'react';
import AppReducer from './AppReducer';

//initialState
const initialState = {
  watchlist: localStorage.getItem('watchList')
    ? JSON.parse(localStorage.getItem('watchList'))
    : [],
  watched: localStorage.getItem('watched')
    ? JSON.parse(localStorage.getItem('watched'))
    : [],
};

//create context
export const GlobalContext = createContext(initialState);

//provider
export const GlobalProvider = props => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem('watchList', JSON.stringify(state.watchlist));
    localStorage.setItem('watched', JSON.stringify(state.watched));
  }, [state]);

  //actions
  const addToWatchList = movie => {
    dispatch({
      type: 'ADD_MOVIE_TO_WATCHLIST',
      payload: movie,
    });
  };
  const addToWatched = movie => {
    dispatch({
      type: 'ADD_MOVIE_WATCHED',
      payload: movie,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addToWatchList,
        addToWatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
