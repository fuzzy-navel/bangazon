import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Navibar from './components/Navibar/Navibar';


import './App.css';

export default class App extends Component {

  render() {
      return (
          <BrowserRouter>
              <div>
                  <Navibar />
                  <div className="container">
                      <div className="row">
                          <Switch>
                              <Route path="/" exact component={Home} />
                              

                          </Switch>
                      </div>
                  </div>
              </div>
          </BrowserRouter>

      
    );
  }
}

export default App;
