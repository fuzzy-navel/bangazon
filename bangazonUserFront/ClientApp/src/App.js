import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Products from './components/Products/Product';
import SingleProduct from './components/Products/SingleProduct/SingleProduct';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="container">
             <div className="row">
              <Switch>
                <Route component={SingleProduct} path='/products/:id' />
                <Route component={Products} path='/products' />
              </Switch>
            </div>
          </div>

        </div>
      </BrowserRouter>
    );
  }
}
