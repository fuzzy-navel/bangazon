import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Shop from './components/Shop/Shop';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="container">
             <div className="row">
              <Switch>
                <Route component={Shop} path="/shop" />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
