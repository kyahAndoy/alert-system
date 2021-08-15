import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";

import Home from './Home';
import Videos from './Videos';
import Images from './Images';
import Downloads from './Downloads';


function App() {
  return (
    <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/videos" component={Videos} />
              <Route exact path="/images" component={Images} />
              <Route exact path="/downloads" component={Downloads} />
            </Switch>
          </Router>
  );
}

export default App;
