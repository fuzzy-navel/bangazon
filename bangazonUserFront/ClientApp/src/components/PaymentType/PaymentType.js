import React from 'react';
import { Switch, Route } from 'react-router';
import SinglePaymentType from './SinglePaymentType/SinglePaymentType';
import AllPaymentType from './AllPaymentTypes/AllPaymentTypes';
import AddPaymentType from './AddPaymentType/AddPaymentType';

const PaymentTypes = () => (
  <Switch>
    <Route exact path='/paymentTypes' component={AllPaymentType} />
    <Route exact path='/paymentTypes/addPayment' component={AddPaymentType} />
    <Route exact path='/paymentType/:id' component={SinglePaymentType} />
  </Switch>
)

export default PaymentTypes;