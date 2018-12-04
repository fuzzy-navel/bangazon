import React from 'react';
import {Switch, Route} from 'react-router-dom';

import AddComputer from './AddComputer/AddComputer';
import AllComputers from './AllComputers/AllComputers';
import Computer from './Computer/Computer';

import './Computers.css';

const Computers = () => (
  <Switch>
    <Route exact path='/computers' component={AllComputers} />
    <Route path='/computers/addcomputer' component={AddComputer} />
    <Route path='/computers/:id' component={Computer} />
  </Switch>
)

export default Computers;