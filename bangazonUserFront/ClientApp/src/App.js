import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import Users from './components/User/Users';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/counter' component={Counter} />
          <Route path='/fetchdata' component={FetchData} />
          <Route path='/user' component={Users} />
        </Switch>        
      </BrowserRouter>
    );
  }
}
