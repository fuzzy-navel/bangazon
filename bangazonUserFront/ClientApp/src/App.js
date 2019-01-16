import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import  SinglePaymentType  from './components/PaymentType/SinglePaymentType/SinglePaymentType';
//import { AddPayment } from './components/PaymentType/AddPaymentType';


export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
            <Route component={SinglePaymentType}/>
      </Layout>
    );
  }
}
