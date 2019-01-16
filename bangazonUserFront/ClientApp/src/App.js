import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navibar from './components/Navibar/Navibar';

//import { Layout } from './components/Layout';
//import { Home } from './components/Home';
//import { FetchData } from './components/FetchData';
//import { Counter } from './components/Counter';

export default class App extends Component {
  //displayName = App.name

  render() {
      return (
          <BrowserRouter>
              <div>
                  <Navibar />
                  <div className="container">
                      <div className="row">
                          <Switch>
                          </Switch>
                      </div>
                  </div>
              </div>
          </BrowserRouter>

      //<Layout>
      //  <Route exact path='/' component={Home} />
      //  <Route path='/counter' component={Counter} />
      //  <Route path='/fetchdata' component={FetchData} />
      //</Layout>
    );
  }
}
