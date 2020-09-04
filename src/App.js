import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './lib/font-awesome/css/all.min.css';
import './App.css';
import WatchList from './components/WatchList';
import Watched from './components/Watched';
import Add from './components/Add';
import Header from './components/Header';
import { GlobalProvider } from './Context/GlobalState';
import Movie from './components/MovieList';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Movie} />
          <Route exact path='/WatchList' component={WatchList} />
          <Route exact path='/Watched' component={Watched} />
          <Route exact path='/Add' component={Add} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
