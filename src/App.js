import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Movie from './Movie';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/movie" component={Movie} />
              </Switch>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
