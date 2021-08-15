import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import {Divider} from '@material-ui/core';
import Home from './Home';
import Videos from './Videos';
import Images from './Images';
import Downloads from './Downloads';
import BottomNav from './components/BottomNav';



function App() {
  return (
    
    <>
    <Divider />

      <Router>
      <BottomNav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/videos" component={Videos} />
              <Route path="/images" component={Images} />
              <Route path="/downloads" component={Downloads} />
            </Switch>
         </Router>
       </>
  );
}

export default App;
