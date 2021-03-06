import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";

import Home from './Home';
import Videos from './Videos';
import Images from './Images';
import Downloads from './Downloads';
import BottomNav from './components/BottomNav';
import Container from "@material-ui/core/Container";



function App() {
  return (
    
    <>
      <Router>
        <Container maxWidth="xs">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/videos" component={Videos} />
              <Route path="/images" component={Images} />
              <Route path="/downloads" component={Downloads} />
        </Switch>
        <BottomNav />
        </Container>
         </Router>
       </>
  );
}

export default App;
