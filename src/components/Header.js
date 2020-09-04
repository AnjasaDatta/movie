import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <header>
        <div className='container'>
          <div className='inner-content'>
            <div className='brand'>
              <Link to='/'>MovieList</Link>
            </div>
            <ul className='nav-links'>
              <li>
                <Link to='/WatchList'>WatchList</Link>
              </li>
              <li>
                <Link to='/Watched'>Watched</Link>
              </li>
              <li>
                <Link className='btn' to='/Add'>
                  + Add
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
