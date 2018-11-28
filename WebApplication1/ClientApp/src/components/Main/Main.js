import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home/Home';
import Customers from '../Customers/Customers';
import Employees from '../Employees/Employees';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/customers' component={Customers}/>
      <Route path='/employees' component={Employees}/>
      <Route path='/departments' component={Departments}/>
      <Route path='/computers' component={Computers}/>
      <Route path='/orders' component={Orders}/>
      <Route path='/products' component={Products}/>
      <Route path='/producttypes' component={ProductTypes}/>
      <Route path='/paymenttypes' component={PaymentTypes}/>
      <Route path='/trainingprograms' component={TrainingPrograms}/>
    </Switch>
  </main>
)

export default Main;