import React, { useState } from 'react';
import ResultCard from './ResultCard';

const api_key = '';
const Add = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  function handleChange(e) {
    setSearch(e.target.value);

    const finalURL = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=1&include_adult=false&query=${search}`;
    fetch(finalURL)
      .then(res => res.json())
      .then(data => setResults(data.results))
      .catch(err => console.log(err));
  }
  return (
    <div className='add-page'>
      <div className='container'>
        <div className='add-content'>
          <div className='input-wrapper'>
            <input
              onChange={handleChange}
              type='text'
              placeholder='Search a Movie'
              value={search}
            ></input>
          </div>
          {results !== undefined && (
            <ul className='results'>
              {results.map((movie, i) => (
                <li key={i}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
export default Add;

//https://api.themoviedb.org/3/movie/550?api_key=a769470d21273f7e6d57a74cfd8e9964
