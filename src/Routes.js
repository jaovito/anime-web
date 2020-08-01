import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Animes from './pages/Animes'
import Home from './pages/Home'
import AnimeList from './pages/AnimeList'

export default function Routes() {
  return (
    <Router>
        <Switch>    
          <Route exact path="/trandings" component={Home} />
          <Route path="/search" component={AnimeList} />
          <Route path="/Animes" component={Animes} />
          <Redirect from='*' to='/trandings' />
        </Switch>
    </Router>
  );
}
