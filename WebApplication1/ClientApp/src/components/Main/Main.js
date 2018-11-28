import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home/Home';
import Computers from '../Computers/Computers';
import Customers from '../Customers/Customers';
import Departments from '../Departments/Departments';
import Employees from '../Employees/Employees';
import Orders from '../Orders/Orders';
import PaymentTypes from '../PaymentTypes/PaymentTypes';
import Products from '../Products/Products';
import ProductId from '../ProductId/ProductId';
import ProductTypes from '../ProductTypes/ProductTypes';
import TrainingPrograms from '../TrainingPrograms/TrainingPrograms';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/computers' component={Computers}/>
      <Route path='/customers' component={Customers}/>
      <Route path='/departments' component={Departments}/>
      <Route path='/employees' component={Employees}/>
      <Route path='/orders' component={Orders}/>
      <Route path='/paymenttypes' component={PaymentTypes}/>
      <Route path='/products' component={Products}/>
      <Route path='/products/:id' component={ProductId}/>
      <Route path='/producttypes' component={ProductTypes}/>
      <Route path='/trainingprograms' component={TrainingPrograms}/>
    </Switch>
  </main>
)

export default Main;