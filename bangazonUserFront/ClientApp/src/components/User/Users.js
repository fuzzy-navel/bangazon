import React from 'react';
import { Switch, Route } from 'react-router-dom';
import User from './User/User';

const Users = () => (
  <Switch>
    <Route exact path='/user' component={User}/>
  </Switch>
)

export default Users;